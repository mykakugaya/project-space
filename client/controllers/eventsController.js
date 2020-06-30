const db = require("../src/models");

module.exports = function(app) {
    app.get("/api/events", function(req, res) {
        db.Event.findAll({
            include: [db.eventName]
        }).then(function(eventGetResult) {
            res.json(eventGetResult)
        })
    });

    app.post("/api/events", function(req,res) {
        db.Event.create(req.body).then(function(eventCreateResult){
            res.json(eventCreateResult)
        });
    });
    // // Delete Event
    // app.delete("/api/events/:id", function(req,res) {
    //     db.Event.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function(eventDeleteResult) {
    //         res.json(eventDeleteResult)
    //     });
    // });
    // // Update Event
    // app.put("/api/activity/:id", function(req, res) {
    //     db.Activity.update({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function(activityUpdateResult) {
    //         res.json(activityUpdateResult);
    //     });
    // });
};