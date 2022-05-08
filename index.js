// import all necessary dependencies
require("dotenv").config();
const inquirer = require("inquirer");
const db = require("./db/connection");

// start server after db connection 
db.connect(err => {
    if (err) throw err;
    console.log("Database connected.");

    // inquirer commands
    const promptUser = () => {
        return inquirer.prompt([
            
        ])
    }
});
