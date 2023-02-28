const connection = require("../../common/db/dbPool");
const mysql = require("mysql");
const diQuery = require("../mapper/diQuery");

const result = {
    writeMemo : async (params) => {
        var query = diQuery.writeMemo;
        var format = mysql.format(query, params);

        return await connection(format)
    },
    temSave : async (params) => {
        var query = diQuery.temSave;
        var format = mysql.format(query, params);

        return await connection(format);
    },
    memoList : async (param) => {
        var query = diQuery.memoList;
        var format = mysql.format(query, param);

        return await connection(format);
    }
}

module.exports= result