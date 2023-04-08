const mysql = require('mysql');

// create here mysql connection

const dbConnection = mysql.createConnection({
    // host: 'localhost',
    // port: '3306',
    // user: 'root',
    // password: 'password',
    // database: 'bookstore'
    host: 'mystack-databaseprimaryinstance-qklvbj3xldds.ct7azeruzkp4.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'awspassword',
    password: 'awsadmin',
    database: 'bookstore'
    
});

dbConnection.connect(function(error){
    if(error) throw error;
    console.log('Database Connected Successfully!!!');
})

module.exports = dbConnection;