const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongo_nodemy", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const mgD = mongoose.connection;
mgD.on("open", () => {
  console.log("mongoDB is connected successfully");
});
mgD.on("error", (error) => {
  console.log(error);
});
