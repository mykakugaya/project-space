const express = require("express");


// const mongoose = require("mongoose");
const routes = require("./client/controllers");
const app = express();

// set up ports and requiring models for syncing
const PORT = process.env.PORT || 3001;
const db = require("./client/src/models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// authenticating middleware for authentication
app.use(compression({ threshold:0, filter: shouldCompress }))
app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }
  // fallback to standard filter function
  return compression.filter(req, res)
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/projectspace");


// Start the API server

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});