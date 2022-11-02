const Post = require("../models/post");
const mongoose = require("mongoose");
exports.createPost = async (req, res) => {
  try {
    console.log(req.body, "req body is here");
    const { email, name, phone, address, services } = req.body;
    const newPost = new Post({
      email,
      phone,
      address,
      services,
      name,
    });
    const post = await Post.create(newPost);
    return res.status(200).json({
      success: true,
      message: "Post created succcessfully",
    });
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: err.message,
    });
  }
};
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().exec();
    return res.status(200).json([...posts]);
  } catch (err) {
    return res.status(500).json({
      success: true,
      message: err.message,
    });
  }
};
exports.deletePost = async (req, res) => {
  try {
    let isValid = mongoose.Types.ObjectId.isValid(req.params.id);
    console.log(isValid);
    const post = await Post.findById(req.params.id);
    console.log(post);
    if (post) await post.remove();

    return res.status(200).json({
      success: true,
      message: "Post removed successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
