
// --------------------------------------------------------------------------
// Dependencies
// --------------------------------------------------------------------------

require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const routes = require("./routes");
const db = require("./models");

// --------------------------------------------------------------------------
// App definitions
// --------------------------------------------------------------------------

// Global vars
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
// Set up to handle URL and JSON parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Set up session to keep track of user login status
app.use(session({ secret: "boondoggle", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(routes);


// --------------------------------------------------------------------------
// Sync models and initialize server
// --------------------------------------------------------------------------


db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});

module.exports = app;
