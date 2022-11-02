const express = require("express");
const { createPost, getAllPosts, deletePost } = require("../controllers/post");

const router = express.Router();

router.route("/posts").get(getAllPosts).post(createPost);
router.route("/posts/:id").delete(deletePost);
module.exports = router;
