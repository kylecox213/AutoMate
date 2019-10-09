const router = require("express").Router();
const templateRoute = require("./template");

// API routes
router.use("/template", templateRoute);

module.exports = router;
