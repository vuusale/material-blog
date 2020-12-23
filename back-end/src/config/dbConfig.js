const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.MYSQL_URL,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
});

const asyncPoolQuery = async (sql, params=null) => {
    return await new Promise((resolve, reject) => {
        pool.query(sql, params, (err, rows) => {
            if (err) reject({...err});
            else resolve(rows);
        })
    });
}

module.exports = asyncPoolQuery;