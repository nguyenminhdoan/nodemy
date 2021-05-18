const express = require("express");
const router = express.Router();

const { PostController } = require("../controller/index");

router.all("/", (req, res, next) => {
  next();
});

router.get("/", async (req, res) => {
  const data = await PostController.getPosts();
  res.json({
    status: "success",
    data: data,
  });
});

router.post("/", async (req, res) => {
  // console.log(req.body);
  const data = await PostController.createPosts(req.body);
  res.json({
    status: "success",
    data: data,
  });
});

// Get post by id
router.get("/:_id", async (req, res) => {
  try {
    const data = await PostController.getPosts();
    const _id = req.params._id;
    const result = data.filter((post) => post._id.toString() === _id)[0];

    if (_id === result._id.toString()) {
      return res.json({
        status: "success",
        data: result,
      });
    }
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.put("/:_id", async (req, res) => {
  try {
    const { content } = req.body;
    const _id = req.params._id;
    const data = await PostController.updatePost({ _id, content });
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
