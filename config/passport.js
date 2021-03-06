const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy
const User = require('../models/User/User.js')
module.exports = function () {
  console.log("CONFIGURING PASSPORT")
  passport.use(new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true
    },
    function (req, username, password, done) {
      console.log('Local Strategy')
      User.findOne({ username: username }, function (err, user) {
        console.log(username)
        if (err) {
          console.log("Error. Access denied.")
          return done(err);
        }
        if (!user) {
          console.log("No user match. Access denied.")
          return done(null, false);
        }
        return done(null, user);
      });
    }));

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
}

