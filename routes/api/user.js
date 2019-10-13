const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
    .get(userController.findAll)

// Matches with "/api/users/:id"
router.route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);

// Matches with "/api/users/register"
router.route("/register")
    .post(userController.create);

// Matches with "/api/users/login"
router.route("/login")
    .post(userController.login);

// Matches with "/api/users/logout"
router.route("/logout")
    .get(userController.logout);

// Matches with "/api/users/:id/transactions"
router.route("/:id/transactions")
    .get(userController.pullTransactions);

// Matches with "/api/users/:id/transactions"
router.route("/:id/reports")
    .get(userController.pullReports);

module.exports = router;
