// Bring in the MySQL library for use
let mysql = require('mysql')

// Bring in the .eng file for use
require("dotenv").config();

// use the information from the .env file for host, user, password, and database
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

// connect to the database in AWS for use, 
// and respond with error or success message to show status of connection
connection.query("select now()", [], function(error, results){
    if(error) {
        console.log("Could not connect to the database ", error);
    } else {
        console.log("Connection made, result = ", results);
    }
});

// make the connection available for use
module.exports = connection;