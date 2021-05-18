const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  content: {
    type: String,
    maxlength: 50,
    required: true,
  },
  title: {
    type: String,
    maxlength: 50,
    required: true,
  },
  comment: {
    type: String,
    maxlength: 100,
  },
});

module.exports = {
  PostSchema: mongoose.model("Post", PostSchema),
};
