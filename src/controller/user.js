const { User } = require("../model/index");
const { Op } = require("sequelize");

exports.getUsers = async (body) => {
  try {
    const result = await User.findOne({
      where: {
        userName: body.userName,
        password: body.password,
      },
    });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

exports.createUser = async (body) => {
  try {
    const result = await User.create({
      //   userName: body.userName,
      //   password: body.password,
      ...body,
    });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateUser = async (body) => {
  try {
    const user = await User.findByPk(id);
    user.userName = body.userName;
    user.password = body.password;
    user.fullName = body.fullName;
    user.age = body.age;
    user.email = body.email;
    user.jobId = body.jobId;

    await user.save();
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteUser = async (userId) => {
  try {
    const result = await User.destroy({ where: { id: userId } });
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
