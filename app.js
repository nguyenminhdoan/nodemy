const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));
app.use(express.json());

const port = 3001;

// LOAD routers
const authRouter = require("./src/routers/auth.router");
const jobRouter = require("./src/routers/job.router");
const userRouter = require("./src/routers/user.router");
// USE routers
app.use("/v1/auth", authRouter);
app.use("/v1/user", userRouter);
app.use("/v1/job", jobRouter);

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
