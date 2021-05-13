const express = require("express");
const router = express.Router();
const { JobController } = require("../controller/index");

router.all("/", (req, res, next) => {
  next();
});

router.get("/", (req, res, next) => {
  res.json({ status: "job get" });
});

router.post("/", (req, res, next) => {
  res.json({ status: "job post" });
});

router.put("/", (req, res, next) => {
  res.json({ status: "job put" });
});

router.delete("/:_id", (req, res, next) => {
  res.json({ status: "job delete" });
});

module.exports = router;
