const httpMocks = require("node-mocks-http");
const todoController = require("../../src/controllers/todo.controller");
const todoModel = require("../../src/models/todo.model");
const newTodo = require("../mock/new-todo.json");

// mock the mongoose create function
todoModel.create = jest.fn();

let req;
let res;
let next;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
});

describe("TodoController.createTodo", () => {
  beforeEach(() => {
    req.body = newTodo;
  });

  it("should have a createTodo function", () => {
    expect(typeof todoController.createTodo).toBe("function");
  });

  it("should call TodoModel.create", () => {
    todoController.createTodo(req, res, next);

    expect(todoModel.create).toBeCalledWith(newTodo);
  });

  it("should return a 201 response code", () => {
    todoController.createTodo(req, res, next);

    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
    // expect(res._isJSON()).toBeTruthy();
  });

  it("should return a json body in the response", () => {
    todoModel.create.mockReturnValue(newTodo);
    todoController.createTodo(req, res, next);

    expect(res._getJSONData()).toStrictEqual(newTodo);
  });
});
 