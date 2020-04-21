const todoModel = require("../models/todo.model");

exports.createTodo = () => {
  todoModel.create();
};
