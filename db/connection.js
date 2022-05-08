// import all necessary dependencies
const mysql = require("mysql2");

// connect to database ***
const db = mysql.createConnection(
    {
        host: "localhost",
        // your mysql username
        user: "root",
        // your mysql password
        password: "",
        database: "employee_tracker"
    },
    console.log("Connected to the employee_tracker database")
);

module.exports = db;