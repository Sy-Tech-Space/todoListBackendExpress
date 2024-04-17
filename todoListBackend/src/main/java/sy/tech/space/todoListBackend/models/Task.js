// models/Task.js
const { Pool } = require('../config/dbConfig');

const createTable = async () => {
    try {
        const pool = await Pool.connect();
        const query = `
            CREATE TABLE Tasks (
                id INT IDENTITY(1,1) PRIMARY KEY,
                title NVARCHAR(255) NOT NULL
            )
        `;
        //pool.request().query(query);
        await pool.query(query);
        console.log('Tasks table created');
    } catch (error) {
        console.error('Error creating Tasks table:', error);
    }
};

const getAllTasks = async () => {
    try {
        const pool = await Pool.connect();
        const result = await pool.query('SELECT * FROM "Tasks"');
        //return result.recordset;
        return result.rows;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};

const createTask = async (title) => {
    try {
        const pool = await Pool.connect();
        const query = `
            INSERT INTO Tasks (title)
            VALUES ('${title}')
        `;
        await pool.query(query);
        console.log('Task created');
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
};

//function for deleting a task by ID
const deleteTask = async (id) => {
    try {
        const pool = await Pool.connect();
        const query = 'DELETE FROM Tasks WHERE id = $1';
        await pool.query(query, [id]);
        console.log('Task deleted');
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
};


//function for updating a task by ID
const updateTask = async (id, title) => {
    try {
        const pool = await Pool.connect();
        const query = 'UPDATE Tasks SET title = $1 WHERE id = $2';
        await pool.query(query, [title, id]);
        console.log('Task updated');
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
};

module.exports = {
    createTable,
    getAllTasks,
    createTask,
    deleteTask,
    updateTask
};
