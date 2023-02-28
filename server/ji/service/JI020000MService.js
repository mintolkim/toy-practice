const connection = require("../../common/db/dbPool");
const mysql = require("mysql");
const JIQuery = require("../mapper/JIQuery");
const logger = require("../../common/config/winston");

const result = {
    join : async (params) => {
        logger.debug(params);
        var query = JIQuery.userInsert;
        var format = mysql.format(query, params);
        logger.debug(format);
        
        return await connection(format);
    },
    idChk : async (param) => {
        var query = JIQuery.chkUesrId;
        var format = mysql.format(query, param);

        return await connection(format);
    }
}

module.exports = result;