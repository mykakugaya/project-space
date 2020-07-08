const express = require("express");
const compression = require("compression");
const passport = require("./config/passport")
// const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const session = require("express-session");
// set up ports and requiring models for syncing
const PORT = process.env.PORT || 3001;
const db = require("./models");
const path = require('path')

//im a placeholder
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: "sharlenes web", resave: true, saveUninitialized: true}))
// authenticating middleware for authentication
app.use(compression({ threshold:0, filter: shouldCompress }))
app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(passport.initialize());
app.use(passport.session())

function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }
  // fallback to standard filter function
  return compression.filter(req, res)
}
// Add routes, both API and view
app.use("/api", routes);

app.get("*", (req,res)=>{
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

db.sequelize.sync({force:false}).then(() => { 
  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});