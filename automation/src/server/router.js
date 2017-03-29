import express from 'express';

import {
  AuthenticationController,
  UserController
} from './controllers';

export function router (app) {
  let apiRoutes = express.Router();
  let authRoutes = express.Router();
  let userRoutes = express.Router();

  apiRoutes.use('/auth', authRoutes);
  authRoutes.post('/login', AuthenticationController.login);
  authRoutes.post('/register', AuthenticationController.register);

  apiRoutes.use('/users', userRoutes);
  userRoutes.post('/remove', UserController.remove);

  app.use('/', apiRoutes);
}
