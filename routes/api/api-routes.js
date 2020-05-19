const passport = require('passport')
const router = require("express").Router();
const isAuthenticated = require("../../config/isAuthenticated")

router.get('/admin',
 isAuthenticated, 
 (req, res) => {

    res.json({ status: 'ok' })
  })

router.post('/login',
  passport.authenticate('local',
  { failureRedirect: '/login' }),
  function (req, res) {
    console.log('bonjour', req.user)
    res.json(req.user);
  });

  // Route for logging user out
  router.get('/logout', function (req, res) {
    res.redirect('/')
    req.logout()
    
  })
module.exports = router