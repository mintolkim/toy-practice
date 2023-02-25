const connection = require("../../common/db/dbPool");
const mysql = require("mysql");
const sql = require("../mapper/JIQuery")

const result = {
    join : (params)=>{
        console.log(params);

        var query = sql.userInsert;
        var format = mysql.format(query, params);
        console.log(sql);
        console.log(format);
        
        connection(format);
    }
}

module.exports = result;