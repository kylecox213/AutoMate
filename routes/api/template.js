const router = require("express").Router();
const templateController = require("../../controllers/templateController");

// Matches with "/api/template"
router.route("/")
  .get(templateController.findAll)
  .post(templateController.create);

// Matches with "/api/template/:id"
router
  .route("/:id")
  .get(templateController.findById)
  .put(templateController.update)
  .delete(templateController.remove);

module.exports = router;
