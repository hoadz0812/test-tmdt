const mysql = require('mysql');
const dotenv = require('dotenv')
dotenv.config()

const connection = mysql.createConnection({
    host: "sql12.freesqldatabase.com",
    user: "sql12603920",
    port: "3306",
    password: "AgDXdYZRjk",
    database: "sql12603920",
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;