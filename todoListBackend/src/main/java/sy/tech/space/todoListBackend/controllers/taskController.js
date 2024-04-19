// controllers/taskController.js
//Controllers handle incoming HTTP requests, process them, and send back responses.
//It also handles any errors that occur during the request processing.

const TaskService = require('../services/taskService');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await TaskService.getAllTasks();
        res.json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const createTask = async (req, res) => {
    try {
        const { title } = req.body;
        await TaskService.createTask(title);
        res.status(201).json({ message: 'Task created successfully' });
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// function for deleting a task by ID
const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        await TaskService.deleteTask(id);
        res.status(204).send(); // No content (successful deletion)
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

//function for updating a task by ID
const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const { title } = req.body;
        await TaskService.updateTask(id, title);
        res.status(200).json({ message: 'Task updated successfully' });
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    updateTask
};
