const express = require("express");
const router = express.Router();

router.all("/", (req, res, next) => {
  next();
});

router.post("/login", (req, res, next) => {
  res.json({ status: "login" });
});

router.post('/register',(req,res,next) => {
  res.json({status: 'register'})
})

module.exports = router;
