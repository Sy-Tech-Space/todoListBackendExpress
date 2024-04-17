// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

router.get('/tasks', TaskController.getAllTasks);
router.post('/tasks', TaskController.createTask);
router.delete('/tasks/:id', TaskController.deleteTask);
router.put('/tasks/:id', TaskController.updateTask);

module.exports = router;
