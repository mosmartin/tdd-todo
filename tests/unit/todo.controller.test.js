const todoController = require("../../src/controllers/todo.controller");
const todoModel = require("../../src/models/todo.model");

// mock the mongoose create function
todoModel.create = jest.fn();

describe("TodoController.createTodo", () => {
  it("should have a createTodo function", () => {
    expect(typeof todoController.createTodo).toBe("function");
  });

  it("should call TodoModel.create", () => {
    todoController.createTodo();
    expect(todoModel.create).toBeCalled();
  });
});
