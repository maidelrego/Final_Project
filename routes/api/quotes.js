const router = require("express").Router();
const quotesController = require("../../controllers/quoteController.js");

// Matches with "/api/books"
router.route("/")
  .get(quotesController.findAll)
  .post(quotesController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
