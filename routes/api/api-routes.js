// Requiring our models and passport as we've configured it
const passport = require('passport')
const router = require("express").Router();
// const User = require('../models/User')

router.route('/health')
  .get((_, res) => {
    res.json({ status: 'ok' })
  })



// router.route("/login").post(
//   passport.authenticate('local'), 
//   (req, _) => {
//     console.log('YOU DIDIT YAY', req.body)
//   }
// )

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function (_, res) {
    console.log('bonjour')
    res.redirect('/');
  });

// router.post("/login",
//   passport.authenticate('local'), 
//   (req, res) => {
//     console.log('YOU DIDIT YAY', req.body)
//   })

//   () => {    passport.authenticate('local', { failureRedirect: '/' })},
//   (_, res) => {
//     console.log('redirect...');

//     res.redirect('/dashboard')
//   }
// )
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