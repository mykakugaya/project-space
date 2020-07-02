const router = require("express").Router();
const db = require("../models");

// get all posts
router.get("/posts", function (req, res) {
  db.User.findAll({
    include: [db.Post],
  }).then(function (getPostsResult) {
    res.json(getPostsResult);
  });
});

// create new post
router.post("/posts", function (req, res) {
  db.Activity.create(req.body).then(function (createPostResult) {
    res.json(createPostResult);
  });
});

// delete post
router.delete("/post/:id", function (req, res) {
  db.Activity.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (deletePostResult) {
    res.json(deletePostResult);
  });
});

// update post
router.put("/post/:id", function (req, res) {
  db.Activity.update({
    where: {
      id: req.params.id,
    },
  }).then(function (updatePostResult) {
    res.json(updatePostResult);
  });
});

module.exports = router;
