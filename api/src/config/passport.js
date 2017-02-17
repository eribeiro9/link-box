import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import { CONFIG } from './main';
import User from '../models/user';

// LOCAL =======================================================================

let localOptions = { usernameField: 'email' };

let localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  User.findOne({ email: email }, function(err, user) {
    if(err) { return done(err); }
    if(!user) { return done(null, false, {
      error: 'Your login details could not be verified. Please try again.'

    }); }

    user.comparePassword(password, function(err, isMatch) {
      if (err) { return done(err); }
      if (!isMatch) {
        return done(null, false, {
          error: 'Your login details could not be verified. Please try again.'
        });
      }

      return done(null, user);
    });
  });
});

passport.use(localLogin);

// JWT =========================================================================

let jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: CONFIG.SECRET
};

let jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  User.findById(payload._id, function(err, user) {
    if (err) return done(err, false);

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(jwtLogin);
