const router = require("express").Router();
const vehicleRoutes = require("./vehicle");

// API routes
router.use("/vehicles", vehicleRoutes);

module.exports = router;
