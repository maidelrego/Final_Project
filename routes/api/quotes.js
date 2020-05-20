const router = require("express").Router();
const quotesController = require("../../controllers/quoteController.js");
const isAuthenticated = require("../../config/isAuthenticated.js")
// Matches with "/api/books"
router.route("/")
  .get(quotesController.findAll)
  .post(quotesController.create)

router.route("/admin:id")
  .get(quotesController.findById, isAuthenticated)
  .delete(quotesController.delete);

router.route("/quotes").get(quotesController.findAll).
post(quotesController.create)
  module.exports = router;