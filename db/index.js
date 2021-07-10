const db = require('./connection');

class databaseQuery {
    constructor(connection) {
        this.connection = db;
    }
    //Department (get, add)
    viewAllDepartments() {
        return this.connection("SELECT * FROM department")
    }

    addDepartment() {
        return this.connection()
    }

    //Role (get, add)
    viewAllRoles() {
        return this.connection("SELECT * FROM roles")
    }

    addRoles() {
        return this.connection()
    }

    //Employee (get, add, update)
    viewAllEmployee() {
        return this.connection("SELECT * FROM employees")
    }

    addEmployees() {
        return this.connection()
    }

    updateEmployeeRole() {
        return this.connection()
    }
}

module.exports = databaseQuery;




