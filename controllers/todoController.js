const Todo = require("../models/todoModle");

// Get All Todos
const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find({ user: req.user._id });
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: "Sorry there's no todos yet!" });
    }
};

// Get One Todo
const getOneTodo = async (req, res) => {
    try {
        const todo = await Todo.findOne({
            _id: req.params.id,
            user: req.user._id,
        });
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create Todo
const createTodo = async (req, res) => {
    try {
        const newTodo = new Todo({
            ...req.body,
            user: req.user._id,
        });
        const saveTodo = await Todo.create(newTodo);
        res.status(201).json({ message: "Todo created succefully", saveTodo });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update Todo
const updateTodo = async (req, res) => {
    try {
        const updatedTodo = await Todo.findOneAndUpdate(
            { _id: req.params.id, user: req.user._id },
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.json(updatedTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Todo
const deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await Todo.findOneAndDelete({
            _id: req.params.id,
            user: req.user._id,
        });
        if (!deletedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllTodos,
    createTodo,
    getOneTodo,
    updateTodo,
    deleteTodo,
};
