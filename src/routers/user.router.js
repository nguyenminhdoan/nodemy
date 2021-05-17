const express = require("express");
const router = express.Router();
const { UserController } = require("../controller/index");

router.all("/", (req, res, next) => {
  next();
});

router.put("/", async (req, res, next) => {
  try {
    const data = await UserController.updateUser(req.body);
    res.json({
      status: "success",
      data: data,
    });
  } catch (error) {
    res.json({
      status: "error",
      error: error.message,
    });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;
    const data = await UserController.deleteUser(userId);
    res.json({
      status: "success",
      data: data,
    });
  } catch (error) {
    res.json({
      status: "error",
      error: error.message,
    });
  }
});

module.exports = router;
