const Sequelize = require("sequelize");

const sequelize = new Sequelize("sql_nodemy", "root", "01684485815tv", {
  dialect: "mysql",
  host: "localhost",
});

sequelize.sync();
module.exports = sequelize;
