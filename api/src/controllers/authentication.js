import jwt from 'jsonwebtoken';

import { CONFIG } from '../config/main';
import { UserService } from '../services';
import { ResponseHelper } from '../helpers';

function generateToken(user) {
  return jwt.sign(user, CONFIG.SECRET, {
    expiresIn: 10080
  });
}

function setUserInfo(user) {
  return {
    _id: user._id,
    username: user.username,
    email: user.email,
    role: user.role
  };
}

export const AuthenticationController = {
  login(req, res) {
    let userInfo = setUserInfo(req.user);

    ResponseHelper.success(res, {
      token: 'JWT ' + generateToken(userInfo),
      user: userInfo
    });
  },

  register(req, res, next) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    if (!username) {
      return ResponseHelper.badRequest(res, 'You must enter a username.');
    } else if (!password) {
      return ResponseHelper.badRequest(res, 'You must enter a password.');
    }

    UserService.findByUsername(username, (err, existingUser) => {
      if (err) { return next(err); }

      if (existingUser) {
        return ResponseHelper.badRequest(res, 'That username is already in use.');
      }

      UserService.newUser(username, password, email, (err, user) => {
        if (err) { return next(err); }

        let userInfo = setUserInfo(user);

        ResponseHelper.created(res, {
          token: 'JWT ' + generateToken(userInfo),
          user: userInfo
        });
      });
    });
  },

  roleAuthorization(role) {
    return function(req, res, next) {
      const user = req.user;

      UserService.findById(user._id, (err, foundUser) => {
        if (err) {
          ResponseHelper.badRequest(res, 'No user was found.');
          return next(err);
        }

        if (foundUser.role == role) {
          return next();
        }

        ResponseHelper.unauthorized(res);
        return next('Unauthorized');
      });
    };
  }
};
