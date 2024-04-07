// services/taskService.js
const Task = require('../models/Task');

const getAllTasks = async () => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM Tasks');
        return result.recordset;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};

const createTask = async (title) => {
    try {
        await Task.createTask(title);
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
};

module.exports = {
    getAllTasks,
    createTask
};
