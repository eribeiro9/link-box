import jwt from 'jsonwebtoken';

import { User } from '../models/user';
import { CONFIG } from '../config/main';

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

export function login(req, res) {
  let userInfo = setUserInfo(req.user);

  res.status(200).json({
    token: 'JWT ' + generateToken(userInfo),
    user: userInfo
  });
}

export function register(req, res, next) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  if (!username) {
    return res.status(422).json({ error: 'You must enter a username.'});
  } else if (!password) {
    return res.status(422).json({ error: 'You must enter a password.' });
  }

  User.findOne({ username: username }, function(err, existingUser) {
    if (err) { return next(err); }

    if (existingUser) {
      return res.status(422).json({ error: 'That username is already in use.' });
    }

    let newUser = new User({
      username: username,
      email: email || null,
      password: password,
      profile: { },
      conversations: [ ]
    });

    newUser.save(function(err, user) {
      if (err) { return next(err); }

      let userInfo = setUserInfo(user);

      res.status(201).json({
        token: 'JWT ' + generateToken(userInfo),
        user: userInfo
      });
    });
  });
}

export function roleAuthorization(role) {
  return function(req, res, next) {
    const user = req.user;

    User.findById(user._id, function(err, foundUser) {
      if (err) {
        res.status(422).json({ error: 'No user was found.' });
        return next(err);
      }

      if (foundUser.role == role) {
        return next();
      }

      res.status(401).json({ error: 'You are not authorized to view this content.' });
      return next('Unauthorized');
    });
  };
}
