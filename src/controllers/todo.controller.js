const todoModel = require("../models/todo.model");

exports.createTodo = (req, res, next) => {
  todoModel.create(req.body);
};
