const router = require("express").Router();
const savedContactRoutes = require("./contacts");

// Book routes
router.use("/contacts", savedContactRoutes);

module.exports = router;