const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");

// API Routes
router.use("/api", apiRoutes);

// // Account Routes
// router.use("/account/register",
//   function (req, res, next) {
//     console.log("User registration request with the following credentials:");
//     console.log(req.body);
//     // On request to create a new user, first check to see if an existing user already has that name
//     db.User
//       .findOne({ where: { username: req.body.username } })
//       .then(existingUser => {
//         // If there is an existing user with that name...
//         if (existingUser) {
//           // Send the HTTP status 409 - Conflict
//           res.status(409);
//           // Throw an error detailing why the request was not fulfilled
//           throw new Error("That username is already registered to an account.");
//         }
//         // Otherwise, proceed with new user creation
//         else {
//           db.User.create(req.body)
//             // After creating the new user, return it
//             .then(newUser => { return newUser })
//             // And then redirect the user through the login route to be authenticated and logged in
//             .then(() => res.redirect("/account/login"))
//             // If there's an error, send it to the client
//             .catch(err => res.status(422).json(err));
//         }
//       });
//   }
// );

// router.use("/account/login",
//   function (req, res, next) {
//     console.log("User login request with the following credentials:");
//     console.log(req.body);
//     next()
//   },
//   passport.authenticate("local"),
//   (req, res) => {
//     console.log("Successful login.", req.user);
//     let userInfo = {
//       username: req.user.username
//     };
//     res.send(userInfo);
//   }
// );

// router.use("/account/logout", function (req, res, next) {
//   // Log the user out of the current session and send them back to the landing index page
//   req.logout();
//   res.redirect("/");
// });

// If no other routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
