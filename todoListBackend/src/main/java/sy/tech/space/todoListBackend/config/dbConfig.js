// config/dbConfig.js


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



