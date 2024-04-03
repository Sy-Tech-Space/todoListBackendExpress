const Task = require('../models/Task');

exports.getAllTasks = async () => {
    return await Task.find();
};

exports.createTask = async (title) => {
    const task = new Task({ title });
    return await task.save();
};
