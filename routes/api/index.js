const router = require("express").Router();
const quoteRoutes = require("./quotes");

// Book routes
router.use("/quotes", quoteRoutes);

module.exports = router;
