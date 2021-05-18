const express = require("express");
const router = express.Router();

const { UserController } = require("../controller/index");

router.all("/", (req, res, next) => {
  next();
});

router.post("/finduser", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const data = await UserController.getUsers({ userName, password });
    if (!data) {
      return res.json({
        status: "User not found",
      });
    }
    return res.json({
      status: "success",
      data: data,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.post("/", (req, res) => {
  try {
    const data = UserController.createUser(req.body);
    res.json({
      status: "success",
      data: data,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/deleteuser/:_id", async (req, res) => {
  try {
    const data = await UserController.deleteUser(req.params._id);
    res.json({
      status: "user deleted",
      data: data,
    });
  } catch (error) {
    res.json({
      status: "error",
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await UserController.getAllUsers();
    const result = data.slice(0, 3);
    res.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.json({
      status: "error",
      error: error.message,
    });
  }
});

module.exports = router;
