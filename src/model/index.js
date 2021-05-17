const User = require("./user");
const Job = require("./job");

Job.hasMany(User, {foreignKey: {name:"jobId"}});

User.belongsTo(Job, {foreignKey: {name:"jobId"}});

module.exports = { User, Job };
