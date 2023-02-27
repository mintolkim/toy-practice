const express = require("express");
const path = require("path");
const app = express();
const port = 4000;
const http = require("http").Server(app);
const logger = require("./server/common/config/winston");
//const session = require("./server/common/config/sessionConfig");

const bodyParser = require("body-parser");                  //bodyParser 설정
const router = require("./server/route/router");

app.set("view engine","ejs")                                //화면 engine을 ejs로 설정
app.set("views",path.join(__dirname, "view"));              //ejs 경로 설정
app.use(express.static(path.join(__dirname, "view")));      //view 폴더 접근
//app.use(session);

/* session test */

const session = require("express-session");
const mysqlStore = require("express-mysql-session")(session);
const dbConfig = require("./server/common/config/dbConfig.json");
const sessionStore = new mysqlStore(dbConfig);

// 미들웨어
app.use(bodyParser.json());                                 //req.body 읽기
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: "my secret", 
    resave: false, 
    saveUninitialized: false,
    store: sessionStore,
    cookie:{
        maxAge: 30000
    }
}))

app.use(router);

http.listen(port, ()=>{
    logger.info(`${port} 시작`);
})
