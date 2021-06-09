const mysql = require("mysql");
const config = require('./properties');

//create connection to the database
const connection = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE
});

connection.connect((error) => {
    if(error) throw error;
    console.log("Connection to database success");
});

module.exports = connection;