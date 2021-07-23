const mysql = require("mysql");
require("dotenv").config();

function connectBDD(){
    const connection = mysql.createConnection(
        {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT,
            database: process.env.DB_DATABASE
        }
    );
    
    connection.connect(err => {
        if(!err){
            console.log('mysql : connected');
            //return connection;
            connection.end();
        }
        else
        {
            console.log('mysql : connection failed');
            return false; 
        }
        
    });
}


connectBDD();
