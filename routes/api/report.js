const router = require("express").Router();
const reportController = require("../../controllers/reportController");

// Matches with "/api/reports"
router.route("/")
    .get(reportController.findAll)
    .post(reportController.create);

// Matches with "/api/reports/:id"
router.route("/:id")
    .get(reportController.findById)
    .delete(reportController.remove);

module.exports = router;
