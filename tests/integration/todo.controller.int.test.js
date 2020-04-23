const request = require("supertest");
const app = require("../../app");
const newTodo = require("../mock/new-todo.json");

const endpointUrl = "/todos";

describe(`POST ${endpointUrl}`, () => {
  it("should create a todo", async () => {
    const response = await request(app).post(endpointUrl).send(newTodo);

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe(newTodo.title);
    expect(response.body.done).toBe(newTodo.done);
  });

  it("should return error code 500 on malformed data with POST", async () => {
    const response = await request(app)
      .post(endpointUrl)
      .send({ title: "Missing done property" });

    expect(response.statusCode).toBe(500);
    expect(response.body).toStrictEqual({
      message:
        "ValidationError: Todo validation failed: done: Path `done` is required.",
    });
  });
});
