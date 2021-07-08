const mysql = require('mysql2');

//Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    //Your MySQL username,
    user: 'root',
    //Your MYSQL password
    password: 'Sirish92!',
    database: 'employeestracker'
},
    console.log('Connected to the employeestracker database.')
);

module.exports = db;