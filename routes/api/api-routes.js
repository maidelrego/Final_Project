const passport = require("passport");
const router = require("express").Router();
const quotesController = require("../../controllers/quoteController.js");
const contactController = require("../../controllers/contactController.js");

// each route matches with "/api/.."
router
  .route("/quotes")
  .get(quotesController.findAll)
  .post(quotesController.create);

router
  .route("/quotes/:id")
  .get(quotesController.findById)
  .delete(quotesController.delete);

// contact routes
router
  .route("/message")
  .get(contactController.findAll)
  .post(contactController.create);

router
  .route("/message/:id")
  .get(contactController.findById)
  .delete(contactController.delete);

// user login/logout routes
router.get("/admin", (req, res) => {
  res.json({ status: "ok" });
});

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    res.json(req.user);
  }
);

  router.get('/logout', function (req, res) {
    console.log("logout")
    res.redirect('/')
    req.logout()
  })
module.exports = router

