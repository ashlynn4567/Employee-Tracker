# Employee Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table-of-Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Technologies](#technologies)
- [Future Development](#future-development)
- [Credits](#credits)

## Description

This is my twelfth challenge assignment for the University of Oregon Coding Bootcamp 2022. In this challenge, I use Node.js, Inquirer, and SQL to create a database connects with the command line interface. Users can search for employee information by entering key words into each inquiry prompt.

This application is useful to employers who wish to track their employees in one central database. They can view departments, roles, or employee tables. They can also add, delete, or update each of these tables.

## Features

This application is run using the user's terminal. Before running this application, please see the [Installation](#installation) section.

1. It is invoked using the command `npm start`, which will then begin to prompt the user for input regarding which action they want to take to interact with their employee database.
2. Users can navigate the menu to choose between the following options:
   - View
     - Departments
     - Roles
     - Employees
   - Add
     - Departments
     - Roles
     - Employees
   - Delete
     - Departments
     - Roles
     - Employees
   - Update
     - Employee's Role
     - Employee's Manager
3. If the user chooses to view:
   - **departments**, then they are presented with a table showing the _department name_ and _department ID_.
   - **roles**, then they are presented with a table showing the _job title_, _role ID_, _department ID_ that the role belongs to, and _salary_ for that role.
   - **employees**, then they are presented with a table showing the employee data, including _employee ID_, _first name_, _last name_, _job title_, _department_, _salary_, and _manager_ that the employee reports to.

<p align="center">
<img alt="A demonstration gif showing the user starting the application with the command 'npm start'. The terminal produces prompts asking what the user would like to do. The user can navigate the menu that appears to create (add), read (view), update, or delete employees, roles, or departments. This gif shows the user navigating through the view functions for departments, roles, and employees. Each menu shows the user a nicely formatted table with more information about each of those topics." src="./assets/images/employee-tracker-demo.gif"/>
<br>Here's a <a href="https://drive.google.com/file/d/14LtnZmnGXcX4tiMS_4fKaWJqJxf4-9Pj/view" target="_blank">link</a> to the video version of the above gif.
</p>

4. Users can add departments, roles, or employees as well. Once they select these prompts, they will be asked to enter the relevant information to fill out the table within the employee tracker database. If the user views the tables after adding an element, they can see their changes in the corresponding tables.

<p align="center">
<img alt="A demonstration gif showing the user adding a department, role, and employee. After the user enters the relevant information for each of these options, they can view the corresponding tables again to see that their new data has been added." src="./assets/images/employee-tracker-demo-2.gif"/>
<br>Here's a <a href="https://drive.google.com/file/d/1IrLyyJofYABCGJzKCgP4ezqA8Ptu3wJn/view" target="_blank">link</a> to the video version of the above gif.
</p>

5. Users can delete departments, roles, or employees as well. After the deletion, the corresponding tables will update to show that the relevant data has been removed. Note that any links from other tables to the deleted information will become null.

<p align="center">
<img alt="A demonstration gif showing the user deleting a department, role, and employee. After the deletion, the corresponding tables will update to show that the relevant data has been removed." src="./assets/images/employee-tracker-demo-3.gif"/>
<br>Here's a <a href="https://drive.google.com/file/d/1RFrqKqw9HEfsFiEDZcmncNt4nsUlNZHx/view" target="_blank">link</a> to the video version of the above gif.
</p>

6. And finally, users can update employee information. They have the option to update the employee's role or manager.

<p align="center">
<img alt="A demonstration gif showing the user adding a department, role, and employee. After the user enters the relevant information for each of these options, they can view the corresponding tables again to see that their new data has been added." src="./assets/images/employee-tracker-demo-4.gif"/>
<br>Here's a <a href="https://drive.google.com/file/d/1SnRzKbNktA2SaONRK_va66s2Fd7TYqi_/view" target="_blank">link</a> to the video version of the above gif.
</p>

## Installation

In order to use this application, you will need to install it on your local computer.

1. Open the command line interface.
2. Clone the repository onto your local machine using the `git clone` command.
3. Once the repository has been cloned, navigate into the root directory of the application using the command `cd Team-Profile-Generator`.
4. This application has dependencies that must be installed prior to running the application (i.e. dotenv, inquirer, MySQL2, and console.table). Run the command `npm install` to install necessary packages and dependencies.
5. This application relies on private enviromental variables. In the main directory of the application, create a `.env` file.
   - The contents of your `.env` file should look like this, where [MySQL username] is your MySQL username, and [MySQL password] is your MySQL password:
   ```
   DB_NAME="employee_tracker"
   DB_USER="[MySQL username]"
   DB_PW="[MySQL password]"
   ```
   - For example, if my username is `ashlynn4567` and my password is `password1234`, my `.env` file will look like the following:
   ```
   DB_NAME="employee_tracker"
   DB_USER="ashlynn4567"
   DB_PW="password1234"
   ```
6. Next, you will need to seed the data. Note: You must have MySQL installed on your computer in order to seed the data.
   - Log in to MySQL in your command line with the command `mysql -u root -p`.
   - Enter your login credentials.
   - Type the command `source db/schema.sql`.
   - Next, type the command `source db/seeds.sql`.
   - Quit MySQL with the command `quit`.
7. Now you can start the application. Enter the command `npm start` in your terminal to begin.
8. Navigate through the prompts in your command line interface using your keyboard.
9. If you wish to quit the application at any time, simply type `ctrl + C`.

For further help with installation, please refer to the below demonstration video.

<p align="center">
<img alt="A demonstration gif showing how to clone the repository to your local machine, install all necessary dependencies, create a .env file, and seed your database." src="./assets/images/employee-tracker-demo-5.gif"/>
<br>Here's a <a href="https://drive.google.com/file/d/1kjlwdRrU_z9p4R0omZOK5NPl_s6_9WNK/view" target="_blank">link</a> to the video version of the above gif.
</p>

## Technologies

- JavaScript
- Node.js
- npm
- [dotenv](https://www.npmjs.com/package/dotenv)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [console.table](https://www.npmjs.com/package/console.table)

## Future Development

In the future, I would like to add the following improvements:

- A feature that allows users to export their employee tracker into an excel spreadsheet.
- A front-end UI so that users don't have to go through complicated installation instructions in order to use the application.

I'm always interested in refactoring code to improve it's functionality. If you would like to suggest your own improvements, you can reach me at the links below.

- <a href="mailto:ashlynn4567@gmail.com">Email</a>
- <a href="https://github.com/ashlynn4567">GitHub</a>
- <a href="https://www.linkedin.com/in/ashley-lynn-smith/">LinkedIn</a>

## Credits

This project was built with the help of the University of Oregon's Coding Boot Camp.

## Licensing

The application is covered under the following license: [MIT](https://opensource.org/licenses/MIT)
