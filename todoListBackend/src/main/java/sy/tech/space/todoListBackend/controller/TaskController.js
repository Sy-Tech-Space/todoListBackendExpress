const taskService = require('../services/taskService');

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks();
        res.json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createTask = async (req, res) => {
    try {
        const { title } = req.body;
        if (!title) {
            return res.status(400).json({ message: 'Title is required' });
        }
        const task = await taskService.createTask(title);
        res.status(201).json(task);
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
