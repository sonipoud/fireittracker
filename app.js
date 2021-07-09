const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require('./db');



const office = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'What would you like to do?',
            choices: [
                "Add Department",
                "Add Role",
                "Add Employee",
                "View Departments",
                "View Roles",
                "View Employees",
                "Update Employee Role",
                "Quit",
            ],
        }
    ]).then((answer) => {
        switch (answer.option) {
            case "Add Department":
                return addDepartment();
            case "Add Role":
                return addRole();
            case "Add Employee":
                return addEmployee();
            case "View Departments":
                return viewAllDepartments();
            case "View Roles":
                return viewAllRoles();
            case "View Employees":
                return viewAllEmployees();
            case "Update Employee Role":
                return updateEmployeeRole();
            case "Quit":
                return quit();
        }
    })
}

function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the department?"
        }
    ]);
};

function addRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the name of the role?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary for this role?"
        },
        {
            type: "list",
            name: "department_id",
            message: "What is the department id number?",
            choices: ""
        }
    ]);
};

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the first name of the employee?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the last name for this employee?"
        }
    ]);
}

function viewAllDepartments() {

}

function viewAllRoles() {

}

function viewAllEmployees() {

}

function updateEmployeeRole(){

}

function quit() {
    process.exit();
}


module.exports = office;
