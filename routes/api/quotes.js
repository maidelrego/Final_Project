const router = require("express").Router();
const quotesController = require("../../controllers/quoteController.js");
router.route("/")
  .get(quotesController.findAll)
  .post(quotesController.create)

router.route("/admin:id")
  .get(quotesController.findById)
  .delete(quotesController.delete);

router.route("/quotes").get(quotesController.findAll).
post(quotesController.create)
  module.exports = router;