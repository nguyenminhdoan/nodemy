const { DataTypes } = require("sequelize");
const sequelize = require("../config/sql-connection");

const Job = sequelize.define("User", {
  title: DataTypes.STRING,
  salary: DataTypes.INTEGER,
  address: DataTypes.STRING,
});

module.exports = Job;
