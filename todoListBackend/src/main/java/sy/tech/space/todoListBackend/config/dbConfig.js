// config/dbConfig.js
/*const sql = require('mssql');

const config = {
    server: 'localhost',  // Change this to your server address
    port: 1433,           // Change this to your port number if necessary
    database: 'todoList', // Change this to your database name
    options: {
        encrypt: false,   // Set to true if using Azure SQL
        trustServerCertificate: true, // For self-signed certificates, if applicable
        // Set integratedSecurity to true for Windows authentication
        integratedSecurity: true  
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to MSSQL Server');
        return pool;
    })
    .catch(err => console.error('MSSQL Server connection error:', err));



module.exports = {
    sql,
    poolPromise
};
*/

//........................................................

//Pool function to configure the connection to Postgres using pg module 
const { Pool } = require('pg');

//creat new Pool instance 
const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5433, // default Postgres port
    database: 'todoList'
});


module.exports = {
    Pool: pool
};
//query function, allows executing SQL queries against the database using pool connection
/*module.exports = {
    query: (text, params) => pool.query(text, params)
};*/



