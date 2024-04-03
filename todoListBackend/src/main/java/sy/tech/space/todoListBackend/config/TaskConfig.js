// config/dbConfig.js
const sql = require('mssql');

const config = {
    user: 'your_username',
    password: 'your_password',
    server: 'localhost',
    database: 'todoList',
    options: {
        encrypt: false   // Set to true if using Azure SQL
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
