const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(new LocalStrategy({
        usernameField: "username"
    },
    function(username, password, done) {
        db.User.findOne({
            where: {
                username: username
            }
        }).then(function(dbUser) {
            if (!dbUser) {
                console.log("We're here");
                throw new Error ("No account associated with that username.")
                return done(null, false, {
                    message: "Incorrect email."
                });
            } else if (!dbUser.validPassword(password)) {
                throw new Error ("Incorrect password.")
                return done(null, false, {
                    message: "Incorrect password."
                });
            }
            return done(null, dbUser);
        });
    }
));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

module.exports = passport;