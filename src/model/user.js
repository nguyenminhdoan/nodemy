const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String,
    maxlength: 50,
    required: true,
  },
  password: {
    type: String,
    maxlength: 50,
    required: true,
  },
  email: {
    type: String,
    maxlength: 100,
  },
  age: {
    type: Number,
    maxlength: 100,
  },
  school: {
    type: String,
    maxlength: 100,
  },
});

module.exports = {
    UserSchema: mongoose.model("User", UserSchema),
};
