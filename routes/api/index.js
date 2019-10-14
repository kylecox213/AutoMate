const router = require("express").Router();
const vehicleRoutes = require("./vehicle");
const reportRoutes = require("./report");
const transactionRoutes = require("./transaction");
const userRoutes = require("./user");
const customerRoutes = require("./customer");

// API routes
router.use("/vehicles", vehicleRoutes);
router.use("/reports", reportRoutes);
router.use("/transactions", transactionRoutes);
router.use("/users", userRoutes);
router.use("/customers", customerRoutes);

module.exports = router;
