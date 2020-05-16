// Requiring our models and passport as we've configured it
const passport = require('passport')
const router = require("express").Router();
const isAuthenticated = require("../../config/isAuthenticated")
// const User = require('../models/User')

router.get('/admin', isAuthenticated, (req, res) => {
    res.json({ status: 'ok' })
  })

router.post('/login',
  passport.authenticate('local',
  { failureRedirect: '/login' }),
  function (req, res) {
    console.log('bonjour', req)
    res.json(req.user);
  });

module.exports = router



// module.exports = function(){

//   // app.get('/', function(req, res, next) {
//   //   // Handle the get for this route
//   // });

//   // app.post('/', function(req, res, next) {
//   //  // Handle the post for this route
//   // });
//   app.post('/login',
//   passport.authenticate('local'),
//   function(req, res) {
//     console.log('post route')
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     res.redirect('/users/' + req.user.user);
//   });
// };