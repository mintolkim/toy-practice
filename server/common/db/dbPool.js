const dbConfig = require("../../config/dbConfig.json");
const mysql = require("mysql");
const pool = mysql.createPool(dbConfig);

function connection(queries) {
    return pool.getConnection((err, connection) => {
        if (err) {
            throw err;
        } else {
            console.log("============================");
            console.log("dbPool connection");
            connection.query(queries, (err, result) => {
                if (err) {
                    connection.release();
                    throw err
                } else {
                    console.log(result);
                    connection.release();
                    return result
                }
            });
            console.log("============================");
        }
    })
}

module.exports = connection;