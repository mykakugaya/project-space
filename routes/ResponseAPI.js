const router = require("express").Router()
const db = require("../models");

router.get("/responses/:id", function(req, res) {
    db.Response.findAll({where: {PostId: req.params.id}}, {include: [db.Post, db.User]}).then(function(result) {
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

router.delete("/response/:id", function(req, res) {
    db.Response.destroy({where: {id: req.params.id}})
    .then((result) => {
        return res.json(result);
    })
    .catch(err => {
        res.status(401).json(err);
    });
})

module.exports = router;