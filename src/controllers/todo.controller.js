const todoModel = require("../models/todo.model");

exports.createTodo = async (req, res, next) => {
  const todo = await todoModel.create(req.body);
  res.status(201).json(todo);
};
