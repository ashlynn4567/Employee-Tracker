// import dependencies
const db = require("../db");
const inquirer = require("inquirer");
require("console.table");

// main menu prompts
const mainMenu = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "choice", 
                message: "What would you like to do?",
                choices: [
                    "View all departments",
                    "View all roles",
                    "View all employees",
                    "Add a department",
                    "Delete a department",
                    "Add a role",
                    "Delete a role", 
                    "Add an employee",
                    "Delete an employee", 
                    "Update an employee's role",
                    "Update an employee's manager", 
                    "Quit"
                ]
            }
        ])
        .then(res => {
            console.log("Reached then statement");
            let choice = res.choice;
            // decision tree - user choice determines which function is run
            switch (choice) {
                case 'View all departments':
                    viewDepartments();
                    break;
                case 'View all roles':
                    viewRoles();
                    break;
                case 'View all employees':
                    viewEmployees();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Delete a department':
                    deleteDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Delete a role':
                    deleteRole();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Delete an employee':
                    deleteEmployee();
                    break;
                case "Update an employee's role":
                    updateEmployeeRole();
                    break;
                case "Update an employee's manager":
                    updateEmployeeManager();
                    break;
                default:
                    console.log("Reached quit statement");
                    quit();
            };
        });
};