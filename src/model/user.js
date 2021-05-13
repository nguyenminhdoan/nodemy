const { DataTypes } = require("sequelize");
const sequelize = require("../config/sql-connection");

const User = sequelize.define("User", {
  userName: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: DataTypes.STRING,
  fullName: DataTypes.STRING,
  age: DataTypes.INTEGER,
  email: DataTypes.STRING,
  jobID: DataTypes.INTEGER,
});

module.exports = User;
