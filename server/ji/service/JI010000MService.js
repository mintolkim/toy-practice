const logger = require("../../common/config/winston");
const connection = require("../../common/db/dbPool");
const mysql = require("mysql");
const jiQuery = require("../mapper/JIQuery");

const result = {
    loginChk : async (params) => {
        var query = jiQuery.loginChk;
        var format = mysql.format(query,params);

        return await connection(format);
    }
}

module.exports = result;