const router = require("express").Router()
const db = require("../models");

router.get("/responses", function(req, res) {
    db.Response.findAll({where: {userId: req.params.id}}).then(function(result) {
      return res.json(result);
    })
})

router.post("/responses", function(req, res) {
    db.Response.create(req.body)
    .then((result) => {
        return res.json(result);
    })
    .catch(err => {
        res.status(401).json(err);
    });
})

router.delete("/responses/:id", function(req, res) {
    db.Image.destroy({where: {UserId: req.params.id}})
    .then((result) => {
        return res.json(result);
    })
    .catch(err => {
        res.status(401).json(err);
    });
})

module.exports = router;