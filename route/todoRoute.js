const todoController = require("../controllers/todoController");
const { auth } = require("../middleware/authMiddleware");
const express = require("express");
const router = express.Router();

// Get All Todos
router.get("/", todoController.getAllTodos);
// Create a User
router.post("/", todoController.createTodo);
// Get a User
router.get("/:id", todoController.getOneTodo);
// update a User
router.put("/:id", todoController.updateTodo);
// delete a User
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
