const router = require("express").Router();
const quotesController = require("../../controllers/quoteController.js");

// Matches with "/api/books"
router.route("/")
  .get(quotesController.findAll)
  .post(quotesController.create)

router.route("/:id")
  .delete(quotesController.delete);

module.exports = router;
