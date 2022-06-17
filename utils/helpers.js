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

// function to view all departments
const viewDepartments = () => {
    db.findAllDepartments()
        // parse the query to readability 
        .then(([rows]) => {
            let departments = rows;
            console.table(departments);
        })
        .then(() => mainMenu());
};

// function to view all roles
const viewRoles = () => {
    db.findAllRoles()
        .then(([rows]) => {
            let roles = rows;
            console.table(roles);
        })
        // send user back to prompts
        .then(() => mainMenu());
};

// function to view all employees
const viewEmployees = () => {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.table(employees);
        })
        .then(() => mainMenu());
};

// function to add a department
const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the department?'
        }
    ])
    .then(res => {
        let name = res;
        db.addDepartment(name)
            .then(() => console.log(`Added ${name.name} to the database successfully!`))
            .then(() => mainMenu());
    });
};

// function to delete a department
const deleteDepartment = () => {
    db.findAllDepartments()
        .then(([rows]) => {
            let departments = rows;
            const departmentNames = departments.map(({ id, department }) => ({
                name: department,
                value: id
            }));

            inquirer.prompt([
                {
                    type: 'list',
                    name: 'department',
                    message: 'Which department would you like to remove?',
                    choices: departmentNames
                }
            ])
            .then(res => db.deleteDepartment(res.department))
            .then(() => console.log('Removed department from the database successfully!'))
            .then(() => mainMenu());
    });
};