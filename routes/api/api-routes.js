// Requiring our models and passport as we've configured it
const passport = require('passport')
// const User = require('../models/User')
const express = require('express')
const app = express();


module.exports = function(){
  
  app.get('/', function(req, res, next) {
    // Handle the get for this route
    console.log(res.json('what'))
  });
  
  app.post('/', function(req, res, next) {
   // Handle the post for this route
   console.log(res.json('what'))
  });
  app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    console.log('post route')
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });
};