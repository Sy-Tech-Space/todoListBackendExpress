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

// function for deleting a task by ID
const deleteTask = async (taskId) => {
    try {
        await Task.deleteTask(taskId);
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
};

//function for updating a task by ID
const updateTask = async (taskId, title) => {
    try {
        await Task.updateTask(taskId, title);
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
};

module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    updateTask
};
