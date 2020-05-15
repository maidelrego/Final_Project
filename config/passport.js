
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User/User.js')

module.exports = function (passport) {
  console.log("CONFIGURING PASSPORT")
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

//   passport.use(new LocalStrategy(
//     function (username, password, done) {
//       User.findOne({ username: username }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (!user.verifyPassword(password)) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ))
// }

    passport.use(new LocalStrategy(
      function (username, password, done) {
        console.log('LOCAL STRAT BRAH')
        User.findOne({ username: username }, function (err, user) {
          console.log("DONE FINDIN")
          if (err) { console.log("CRAP:", err); return done(err); }
          if (!user) {
            console.log('UHOH!')
            return done(null, false, { message: 'Incorrect username.' });
          }
          if (!user.validPassword(password)) {
            console.log('RUH ROH', user)
            return done(null, false, { message: 'Incorrect password.' });
          }
          console.log('HARRUMPH ==> user:', user)
          return done(null, user);
        });
      }
    ))
  }

