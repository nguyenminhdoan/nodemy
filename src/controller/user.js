const { UserSchema } = require("../model/User");

exports.getUsers = async ({ userName, password }) => {
  return await UserSchema.findOne({ userName, password });
};

exports.getAllUsers = async () => {
  return await UserSchema.find();
};

exports.createUser = (body) => {
  return new Promise((resolve, reject) => {
    try {
      UserSchema(body)
        .save()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

exports.deleteUser = (_id) => {
  return new Promise((resolve, reject) => {
    try {
      UserSchema.findOneAndDelete({
        _id,
      })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};
