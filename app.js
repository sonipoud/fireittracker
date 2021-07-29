const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require('./db');
const connection = require('./connection');

//Inquirer prompts
const office = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'What would you like to do?',
            choices: [
                "View Departments",
                "View Roles",
                "View Employees",
                "Add Department",
                "Add Role",
                "Add Employee",
                "Update Employee Role",
                "Quit",
            ],
        }
    ]).then((answer) => {
        switch (answer.option) {
            case "View All Departments":
                return viewAllDepartments();
                break;

            case "View All Roles":
                return viewAllRoles();
                break;

            case "View All Employees":
                return viewAllEmployees();
                break;

            case "Add Department":
                return addDepartment();
                break;

            case "Add Role":
                return addRole();
                break;

            case "Add Employee":
                return addEmployee();
                break;

            case "Update Employee Role":
                return updateEmployeeRole();
                break;

            case "Quit":
                return quit();
                break;
        }
    })
}

function viewAllDepartments() {
    db.viewAllDepartments()
    .then(([rows]) => {
        let department = rows;
        const departmentChoices = departments.map(({ id, name}) => {
        })
    })
    console.table(departments);
}

function viewAllRoles() {
    const roles = db.viewAllRoles();
    console.table(roles);
}

function viewAllEmployees() {
    const employees = db.viewAllEmployees();
    console.table(employees);
}

function addDepartment() {
    const department = inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the department?"
        }
    ]);
    db.addDepartment(department);
};

function addRole() {
    const roles = inquirer.prompt([
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
    db.addRole(roles);
};

function addEmployee() {
    const employees = inquirer.prompt([
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
    db.addEmployee(employees);
}

function updateEmployeeRole() {
    const employeeChoices = db.viewAllEmployees();
    const roleChoices = db.viewAllRoles();

    db.updateEmployeeRole(employeeChoices, roleChoices);
}

function quit() {
    process.exit();
}

module.exports = office(db);

// class databaseQuery {
//     constructor(connection) {
//         this.connection = connection;
//     }
//     //Department (get, add)
//     viewAllDepartments() {
//         return this.connection("SELECT * FROM department")
//     }

//     addDepartment() {
//         return this.connection()
//     }

//     //Role (get, add)
//     viewAllRoles() {
//         return this.connection("SELECT * FROM roles")
//     }

//     addRoles() {
//         return this.connection()
//     }

//     //Employee (get, add, update)
//     viewAllEmployee() {
//         return this.connection("SELECT * FROM employees")
//     }

//     addEmployees() {
//         return this.connection()
//     }

//     updateEmployeeRole() {
//         return this.connection()
//     }
// }

// module.exports = databaseQuery;