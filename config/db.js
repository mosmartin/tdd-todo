const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/tdd-tests", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log(`👍 Connected to DB on ${conn.connection.host} host`);
  } catch (err) {
    console.log(`🚨 Error: ${err}`);
  }
};

module.exports = dbConnect;
