var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var db = require('../models');

module.exports = function(passport){

  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
// passport.use(
//   new LocalStrategy({usernameField:"username"},function(username, password, done) {
//     console.log(username);
//     db.User.findOne({ username: username })
//     .then(function(user) {
//       console.log(username);
//       return done(null, user);
//     })
//     .catch(function(err){
//       if (err) {
//         return done(err);
//       }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//     })    
//   }
//   ));

  //kaylie 
  passport.use(new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
      usernameField: "username", 
      passwordField: "password"
    },
    function(username, password, done) {
      // When a user tries to sign in this code runs
      db.User.findOne({
        where: {
          username: username
        }
      }).then(function(dbUser) {
        // If there's no user with the given email
        if (!dbUser) {
          return done(null, false, {
            message: 'Incorrect username.'
          });
        // If there is a user with the given email, but the password the user gives us is incorrect
        }else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: 'Incorrect password.'
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      });
    }
  ));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work

// Exporting our configured passport
}