const router = require("express").Router()
const db = require("../models");
const passport = require("../config/passport");

router.get("/images", function(req, res) {
    db.Images.findAll({where: {userId: req.params.id}}).then(function(result) {
      return res.json(result);
    })
})

router.post("/images", function(req, res) {
    db.Images.create({
        nasa_id: req.body.nasa_id,
        title: req.body.title,
        src: req.body.src,
        userId: req.body.userId
    })
    .then(() => {
        res.redirect(307, "/api/gallery");
    })
    .catch(err => {
        res.status(401).json(err);
    });
})

module.exports = router;