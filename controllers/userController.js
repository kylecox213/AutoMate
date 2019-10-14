const db = require("../models");
const passport = require("../middleware/config/passport");
const isAuthenticated = require("../middleware/config/isAuthenticated");

// Defining methods for the UsersController
module.exports = {
    findAll: function (req, res) {
        db.User
            .findAll()
            .then(users => res.json(users))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(user => res.json(user))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        // On request to create a new user, first check to see if an existing user already has that name
        db.User
            .findOne({ where: { username: req.body.username } })
            .then(existingUser => {
                // If there is an existing user with that name...
                if (existingUser) {
                    // Send the HTTP status 409 - Conflict
                    res.status(409);
                    // Throw an error detailing why the request was not fulfilled
                    throw new Error("That username is already registered to an account.");
                }
                // Otherwise, proceed with new user creation
                else {
                    db.User.create(req.body)
                        // After creating the new user, return it
                        .then(newUser => { return newUser })
                        // And then redirect the user through the login route to be authenticated and logged in
                        .then(res.redirect(307, "/api/users/login"))
                        // If there's an error, send it to the client
                        .catch(err => res.status(422).json(err));
                }
            });
    },
    update: function (req, res) {
        db.User
            .update(req.body, { where: { id: req.params.id } })
            .then(user => res.json(user))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
            .destroy({ where: { id: req.params.id } })
            .then(res.json({ userRemoved: true }))
            .catch(err => res.status(422).json(err));
    },
    pullTransactions: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(user => user.getTransactions())
            .then(transactions => res.send(transactions))
            .catch(err => res.status(422).json(err));
    },
    pullReports: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(user => user.getReports())
            .then(reports => res.send(reports))
            .catch(err => res.status(422).json(err));
    },
    login: function (req, res, next) {
        // User passport to authenticate the user based on the POST body
        passport.authenticate("local"), function (err, user, info) {
            // If there's an error right off the bat, return it
            if (err) { return next(err); }
            // Otherwise, if there's no user, 
            if (!user) { throw new Error("Incorrect username or password"); }
            // Otherwise, the user should be logged in
            req.logIn(user, function (err) {
                // Send the error if there is one
                if (err) { return next(err); }
                // Finally, redirect the user to the /app route to access the application
                return res.redirect("/app");
            });
        }
    },
    // When the logout route is requested...
    logout: function (req, res) {
        // Log the user out of the current session
        req.logout();
        // Send them back to the index page
        res.redirect("/");
    }

};
