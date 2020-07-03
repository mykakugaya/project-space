const router = require("express").Router();
const db = require("../models");

// get all posts
router.get("/posts", function (req, res) {
  db.Post.findAll({
    include: [db.User],
  }).then(function (getPostsResult) {
    res.json(getPostsResult);
  });
});

// create new post
router.post("/posts", function (req, res) {
  db.Post.create(req.body).then(function (dbPost) {
    res.json(dbPost);
  });
});

// delete post
router.delete("/post/:id", function (req, res) {
  db.Post.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (deletePostResult) {
    res.json(deletePostResult);
  });
});

// update post
router.put("/post/:id", function (req, res) {
  db.Post.update({
    where: {
      id: req.params.id,
    },
  }).then(function (updatePostResult) {
    res.json(updatePostResult);
  });
});

module.exports = router;
