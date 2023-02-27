const session = require("express-session");
const mysqlStore = require("express-mysql-session")(session);
const dbConfig = require("./dbConfig.json");

const sessionStore = new mysqlStore(dbConfig);

session({
    secret: "my secret", 
    resave: false, 
    saveUninitialized: false,
    store: sessionStore
})

module.exports = session;