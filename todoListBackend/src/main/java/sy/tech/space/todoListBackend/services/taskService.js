// services/taskService.js
const Task = require('../models/Task');

const getAllTasks = async () => {
    try {
        return await Task.getAllTasks();
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
