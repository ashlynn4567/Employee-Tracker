// import dependencies
const mysql = require("mysql2");
require("dotenv").config();

// connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        // your mysql username
        user: process.env.DB_USER,
        // your mysql password
        password: process.env.DB_PW,
        database: process.env.DB_NAME
    },
    console.log("Connected to the employee_tracker database")
);

// error catching for db connection
db.connect((err) => {
    if (err) throw err;
});

// exports
module.exports = db;