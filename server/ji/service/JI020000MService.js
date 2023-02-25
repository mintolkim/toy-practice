const connection = require("../../common/db/dbPool");
const mysql = require("mysql");
const sql = require("../mapper/JIQuery")

const result = {
    join : (params) => {
        console.log(params);

        var query = sql.userInsert;
        var format = mysql.format(query, params);

        console.log(format);
        
        return connection(format);
    },
    idChk : (param) => {
        var query = sql.chkUesrId;
        var format = mysql.format(query, param);

        //console.log(format);
        return console.log(connection(format))
        //return connection(format);
    }
}

module.exports = result;