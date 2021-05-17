const express = require("express");
const router = express.Router();
const { JobController } = require("../controller/index");

router.all("/", (req, res, next) => {
  next();
});

router.get("/", async (req, res, next) => {
  try {
    const data = await JobController.getJob();
    res.json({
      data: data,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = await JobController.createJob(req.body);
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

router.put("/", async (req, res, next) => {
  try {
    const data = await JobController.updateJob(req.body);
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

router.delete("/:_id", async (req, res, next) => {
  try {
    const jobId = req.params._id;
    const data = await JobController.deleteJob(jobId);
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

module.exports = router;
