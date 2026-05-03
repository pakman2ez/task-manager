const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// test route
app.get('/', (req, res) => {
    res.send('OK');
});

let tasks = [];

// GET
app.get('/tasks', (req, res) => {
    try {
        const { search, status } = req.query;
        let result = tasks;

        if (search) {
            result = result.filter(t =>
                t.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (status) {
            result = result.filter(t => t.status === status);
        }

        res.json(result);
    } catch (err) {
        res.status(500).json({ error: 'server error' });
    }
});

// CREATE
app.post('/tasks', (req, res) => {
    try {
        const task = {
            id: Date.now().toString(),
            title: req.body.title || '',
            status: req.body.status || 'pending'
        };

        tasks.push(task);
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ error: 'server error' });
    }
});

// UPDATE
app.put('/tasks/:id', (req, res) => {
    tasks = tasks.map(t =>
        t.id === req.params.id ? { ...t, ...req.body } : t
    );
    res.json({ message: 'updated' });
});

// DELETE
app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter(t => t.id !== req.params.id);
    res.json({ message: 'deleted' });
});

app.listen(5050, () => console.log('Server running on port 5050'));