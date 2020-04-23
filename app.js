const express = require("express");
const dbConnect = require("./config/db");
const todoRoutes = require("./src/Routes/todo.routes");

const app = express();

// connect to the database
dbConnect();

app.use(express.json());

app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

module.exports = app;
