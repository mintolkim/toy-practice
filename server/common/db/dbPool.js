const dbConfig = require("../config/dbConfig.json");
const mysql = require("mysql");
const pool = mysql.createPool(dbConfig);
const logger = require("../config/winston");

function connection(queries) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            } else {
                logger.info("============================");
                logger.info("dbPool connection");
                connection.query(queries, (err, result) => {
                    if (err) {
                        logger.error(err.message);
                        connection.release();
                        return reject(err);
                    } else {
                        logger.debug(result);
                        connection.release();
                        resolve(result);
                        logger.info("============================");
                    }
                });
            }
        })
    })
}

module.exports = connection;