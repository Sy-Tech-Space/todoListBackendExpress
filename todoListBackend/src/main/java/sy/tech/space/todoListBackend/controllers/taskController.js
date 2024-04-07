// controllers/taskController.js
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

module.exports = {
    getAllTasks,
    createTask
};
