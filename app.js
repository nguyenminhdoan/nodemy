const express = require("express");
const app = express();
const morgan = require("morgan");

require("./src/config/sql-connection");

app.use(morgan("tiny"));
app.use(express.json());

const port = 3001;

// LOAD routers
const userRouter = require("./src/routers/user.router");
const postRouter = require("./src/routers/post.router");
// USE routers
app.use("/v1/post", postRouter);
app.use("/v1/user", userRouter);

// HANDLE error
const handleError = require("./src/utils/handleError");

app.use((req, res, next) => {
  const error = new Error("Resources is not found!!!");
  error.status = 404;

  next(error);
});

app.use((error, req, res, next) => {
  handleError(error, res);
});

app.listen(port, () => {
  console.log(`API is ready on http://localhost:${port}`);
});
