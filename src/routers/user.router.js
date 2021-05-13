const express = require("express");
const router = express.Router();
const {UserController} = require("../controller/index");

router.all("/", (req, res, next) => {
  next();
});

router.put("/", (req, res, next) => {
  res.json({ status: "user" });
});

router.delete("/:id", (req, res, next) => {
  res.json({ status: req.params.id });
});

module.exports = router;
