// Requiring our models and passport as we've configured it
const router = require("express").Router()
const db = require("../models");
const passport = require("../config/passport");

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  router.post("/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  router.get("/users", function(req, res) {
    db.User.findAll({}).then(function(result) {
      return res.json(result);
    })
  })

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  router.post("/signup", (req, res) => {
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
  });

  // Route for getting some data about our user to be used client side
  router.get("/user_data", (req, res) => {
    if (!req.user) {
      // If the user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  router.post("/user_data", (req, res) => {
    if (!req.user) {
      // If the user is not logged in, send back an empty object
      res.redirect("/login");
    } else {
      db.User.update({
        images: req.body
      })
      .then(() => {
        res.json({});
      })
      .catch(err => {
        res.status(401).json(err);
      });
    }
  })


  module.exports = router
