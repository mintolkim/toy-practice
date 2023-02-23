const express = require("express");
const path = require("path");
const app = express();
const port = 4000;
const http = require("http").Server(app);
const bodyParser = require("body-parser");                  //bodyParser 설정
const router = require("./server/route/router");

app.set("view engine","ejs")                                //화면 engine을 ejs로 설정
app.set("views",path.join(__dirname, "view"));             //ejs 경로 설정
app.use(express.static(path.join(__dirname, "view")));      //view 폴더 접근

// 미들웨어
app.use(bodyParser.json());                                 //req.body 읽기
app.use(bodyParser.urlencoded({extended: true}));

app.use(router);

http.listen(port, ()=>{
    console.log(`${port} 시작`);
})