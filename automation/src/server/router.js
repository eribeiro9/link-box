import express from 'express';

import {
  AuthenticationController
} from './controllers';

export function router (app) {
  let apiRoutes = express.Router();
  let authRoutes = express.Router();

  apiRoutes.use('/auth', authRoutes);
  authRoutes.post('/login', AuthenticationController.login);

  app.use('/', apiRoutes);
}