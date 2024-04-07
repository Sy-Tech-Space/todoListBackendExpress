// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');

router.get('/tasks', TaskController.getAllTasks);
router.post('/tasks', TaskController.createTask);

module.exports = router;
