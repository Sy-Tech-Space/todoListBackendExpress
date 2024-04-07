// config/dbConfig.js
// const sql = require('postgresql');

// const config = {
//     server: 'localhost',  // Change this to your server address
//     port: 5433,           // Change this to your port number if necessary
//     database: 'address', // Change this to your database name
//     username: 'postgres',
//     password: 'postgres',
//     options: {
//         encrypt: false,   // Set to true if using Azure SQL
//         trustServerCertificate: true, // For self-signed certificates, if applicable
//         // Set integratedSecurity to true for Windows authentication
//         integratedSecurity: true
//     }
// };

// const poolPromise = new sql.ConnectionPool(config)
//     .connect()
//     .then(pool => {
//         console.log('Connected to MSSQL Server');
//         return pool;
//     })
//     .catch(err => console.error('MSSQL Server connection error:', err));



// module.exports = {
//     sql,
//     poolPromise
// };
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5433, // default Postgres port
    database: 'address'
});

module.exports = {
    query: (text, params) => pool.query(text, params)
};



