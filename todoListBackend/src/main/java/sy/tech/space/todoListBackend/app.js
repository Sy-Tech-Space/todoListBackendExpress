// app.js
const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json());
app.use('/api', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
