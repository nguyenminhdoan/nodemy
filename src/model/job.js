const { DataTypes } = require("sequelize");
const sequelize = require("../config/sql-connection");

const Job = sequelize.define("Job", {
  title: DataTypes.STRING,
  salary: DataTypes.INTEGER,
  address: DataTypes.STRING,
  jobID: DataTypes.INTEGER,
});

module.exports = Job;
