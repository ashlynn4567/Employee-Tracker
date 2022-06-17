// import connection to database
const connection = require('./connection');

// find all departments method
const findAllDepartments = () => {
    return this.connection.promise().query("SELECT department.id, department.name AS department FROM department;");
};

// find all roles method
const findAllRoles = () => {
    return this.connection.promise().query("SELECT role.id, role.title AS job_title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;");
};

// find all employees method
const findAllEmployees = () => {
    return this.connection.promise().query("SELECT employee.id, employee.first_name, employee.last_name, role.title AS job_title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;");
};

// find all managers method
const findAllManagers = (employeeId) => {
    return this.connection.promise().query("SELECT id, first_name, last_name FROM employee WHERE id != ?", employeeId);
};