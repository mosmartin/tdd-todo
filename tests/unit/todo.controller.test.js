const httpMocks = require("node-mocks-http");
const todoController = require("../../src/controllers/todo.controller");
const todoModel = require("../../src/models/todo.model");
const newTodo = require("../mock/new-todo.json");

// mock the mongoose create function
todoModel.create = jest.fn();

describe("TodoController.createTodo", () => {
  it("should have a createTodo function", () => {
    expect(typeof todoController.createTodo).toBe("function");
  });

  it("should call TodoModel.create", () => {
    let req = httpMocks.createRequest();
    let res = httpMocks.createResponse();
    let next = null;

    req.body = newTodo;

    todoController.createTodo(req, res, next);
    expect(todoModel.create).toBeCalledWith(newTodo);
  });
});
