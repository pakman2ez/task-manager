const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/taskdb')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const Task = mongoose.model('Task', {
    title: String,
    status: String
});

app.get('/tasks', async (req, res) => {
    const { search } = req.query;
    let query = {};

    if (search) {
        query.title = { $regex: search, $options: 'i' };
    }

    const tasks = await Task.find(query);
    res.json(tasks);
});

app.post('/tasks', async (req, res) => {
    if (!req.body.title) {
        return res.status(400).json({ error: 'Title required' });
    }

    const task = new Task({ title: req.body.title, status: 'pending' });
    await task.save();
    res.status(201).json(task);
});

app.put('/tasks/:id', async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
});

app.delete('/tasks/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
});

app.listen(5050, () => console.log('Server running on port 5050'));