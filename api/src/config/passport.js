import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import { CONFIG } from './main';
import { UserService } from '../services';

// LOCAL =======================================================================

let localOptions = { usernameField: 'username' };

let localLogin = new LocalStrategy(localOptions, (username, password, done) => {
  UserService.findByUsername(username, (err, user) => {
    if(err) { return done(err); }
    if(!user) { return done(null, false, {
      error: 'Your login details could not be verified. Please try again.'
    }); }

    user.comparePassword(password, (err, isMatch) => {
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

let jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  UserService.findById(payload._id, (err, user) => {
    if (err) return done(err, false);

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(jwtLogin);
