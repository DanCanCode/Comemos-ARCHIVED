const router = require("express").Router();
const Post = require("../database/models/posts");

router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.findAll();
    res.send(posts);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
