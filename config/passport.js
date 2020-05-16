
const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy
const User = require('../models/User/User.js')
const bcrypt = require('bcrypt')
module.exports = function () {
  console.log("CONFIGURING PASSPORT")
  passport.use(new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true
    },
    function (req, username, password, done) {
      console.log(username)
      console.log(password)
      console.log(done)
      console.log('LOCAL STRAT BRAH')
      User.findOne({ username: username }, function (err, user) {
        console.log(user)
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        // if (!user.validPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }));
      // User.findOne({ username: username }, function (err, user) {

    //     if (!user) {
    //       const newUser = new User({ username, password });
    //       // Hash password before saving in database
    //       bcrypt.genSalt(10, (err, salt) => {
    //         bcrypt.hash(newUser.password, salt, (err, hash) => {
    //           console.log("new salt")
    //           if (err) throw err;
    //           newUser.password = hash;
    //           newUser
    //             .save()
    //             .then(user => {
    //               return done(null, user);
    //             })
    //             .catch(err => {
    //               return done(null, false, { message: err });
    //             });
    //         });
    //       });
    //       // Return other user
    //     } else {

    //       console.log("the fineOne user", user)
    //       user.generateHash(password);
    //       let hash = user.generateHash(password)
    //       if (user.validPassword(hash)) {
    //         console.log('RUH ROH', user)
    //         user.comparePassword(hash, (err) => {
    //           console.log(hash)
    //           if (err)
    //             return res.status(500).json("Server error!");
    //         });
    //       }

    //       // Match password
    //       // bcrypt.compare(password, user.password, (err, isMatch) => {
    //       //     if (err) throw err;

    //       //     if (isMatch) {
    //       //         return done(null, user);
    //       //     } else {
    //       //         return done(null, false, { message: "Wrong password" });
    //       //     }
    //       // });
    //     }
    //   })
    //     .catch(err => {
    //       return done(null, false, { message: err });
    //     });
    // })
  // );
  //       console.log("DONE FINDIN", user)
  //       if (err) { console.log("CRAP:", err); return done(err); }
  //       if (user) {
  //         console.log("the fineOne user", user)
  //         user.generateHash(password);
  //         let hash = user.generateHash(password)
  //         if (user.validPassword(hash)) {
  //           console.log('RUH ROH', user)
  //           user.comparePassword(hash, (err) => {
  //             if (err)
  //               return res.status(500).json("Server error!");
  //           });

  //           console.log('HARRUMPH ==> user:', user, password)
  //           return done(null, false, { message: 'Incorrect password or username.' });
  //         }
  //       }
  //     });
  //   }
  //  ))

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
}

