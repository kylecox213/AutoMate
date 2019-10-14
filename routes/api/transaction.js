const router = require("express").Router();
const transactionController = require("../../controllers/transactionController");

// Matches with "/api/transactions"
router.route("/")
    .get(transactionController.findAll)
    .post(transactionController.create);

// Matches with "/api/transactions/:id"
router.route("/:id")
    .get(transactionController.findById)
    .put(transactionController.update)
    .delete(transactionController.remove);

// Matches with "/api/transactions/:id/customers"
router.route("/:id/transactions")
    .get(transactionController.pullCustomers);

// Matches with "/api/transactions/:id/vehicles"
router.route("/:id/vehicles")
    .get(transactionController.pullVehicles);

module.exports = router;
