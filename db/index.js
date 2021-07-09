const db = require('./connection');

class databaseQues{
    constructor(db){
        this.connection = mysql.createConnection(db);
    }

}
//Department (get, add)

//Role (get, add)

//Employee (get, add, update)

module.exports = databaseQues(db);