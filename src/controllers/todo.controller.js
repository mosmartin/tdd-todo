const todoModel = require("../models/todo.model");

exports.createTodo = async (req, res, next) => {
  try {
    const todo = await todoModel.create(req.body);
    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
};
