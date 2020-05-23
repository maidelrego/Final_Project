const router = require("express").Router();
const apiRoutes = require("./api/api-routes.js");


// API Routes
router.use("/api", apiRoutes);




module.exports = router;
