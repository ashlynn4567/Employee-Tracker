// import dependencies
const { mainMenu } = require("./utils/helpers");

// inquirer commands
const init = () => {
    console.log("Welcome to Employee Tracker!");
    return mainMenu();
};

init();