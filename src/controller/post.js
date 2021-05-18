const { PostSchema } = require("../model/Post");

exports.getPosts = async () => {
  return await PostSchema.find();
};

exports.createPosts = (body) => {
  return new Promise((resolve, reject) => {
    try {
      PostSchema(body)
        .save()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

exports.updatePost = ({ _id, content }) => {
  return new Promise((resolve, reject) => {
    try {
      PostSchema.findByIdAndUpdate(
        { _id },
        {
          status: "updated post",
          $set: {
            content,
          },
        },
        {
          new: true,
        }
      )
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};
