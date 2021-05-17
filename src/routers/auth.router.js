const express = require("express");
const router = express.Router();

const { UserController } = require("../controller/index");

router.all("/", (req, res, next) => {
  next();
});

router.post("/login", async (req, res, next) => {
  try {
    const data = await UserController.getUsers(req.body);
    if (data.id) {
      return res.json({
        status: "login success",
        data: data,
      });
    }
  } catch (error) {
    res.json({
      status: "Your account or password doesn't match",
      message: error.message,
    });
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const data = await UserController.createUser(req.body);
    // console.log(data);
    res.json({ status: "success", data: data });
  } catch (error) {
    res.json({
      status: "error",
      error: error.message,
    });
  }
  res.json({ status: "register" });
});

module.exports = router;
