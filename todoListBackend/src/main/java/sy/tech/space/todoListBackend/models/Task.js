// models/Task.js
const { sql } = require('../config/dbConfig');

const createTable = async () => {
    try {
        const pool = await sql.connect();
        const query = `
            CREATE TABLE Tasks (
                id INT IDENTITY(1,1) PRIMARY KEY,
                title NVARCHAR(255) NOT NULL
            )
        `;
        await pool.request().query(query);
        console.log('Tasks table created');
    } catch (error) {
        console.error('Error creating Tasks table:', error);
    }
};

const createTask = async (title) => {
    try {
        const pool = await sql.connect();
        const query = `
            INSERT INTO Tasks (title)
            VALUES ('${title}')
        `;
        await pool.request().query(query);
        console.log('Task created');
    } catch (error) {
        console.error('Error creating task:', error);
    }
};

module.exports = {
    createTable,
    createTask
};
