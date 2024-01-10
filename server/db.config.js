const sql = require('mysql');


const connection = sql.createConnection({
    host: 'localhost://127.0.0.1:3306',
    user: 'niranjan',
    password: 'Niranjan@123',
    database: 'message_app'
  });

  
connection.connect((err) => {
    if (!err) {
      console.log("Connection Successful");
    } else {
      console.log("Error connecting to db " + err);
    }
  });
  

  module.exports = connection