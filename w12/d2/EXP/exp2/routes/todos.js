// routes/todos.js
const express = require('express');
const router = express.Router();

const todos = [];

router.get('/', (req, res) => {
    res.json(todos);
});

router.post('/', (req, res) => {
    const { title } = req.body;
    const newTodo = { id: todos.length + 1, title };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const todoToUpdate = todos.find(todo => todo.id === parseInt(id));
    if (!todoToUpdate) {
        return res.status(404).send('Todo not found');
    }
    todoToUpdate.title = title;
    res.json(todoToUpdate);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(todo => todo.id === parseInt(id));
    if (index === -1) {
        return res.status(404).send('Todo not found');
    }
    todos.splice(index, 1);
    res.sendStatus(204);
});

module.exports = router;
