import express from 'express';
import passport from 'passport';

import './config/passport';
import * as AuthenticationController from './controllers/authentication';
import * as ChatController from './controllers/chat';

let requireAuth = passport.authenticate('jwt', { session: false });
let requireLogin = passport.authenticate('local', { session: false });

export function router (app) {
  let apiRoutes = express.Router();
  let authRoutes = express.Router();
  let chatRoutes = express.Router();

  apiRoutes.use('/auth', authRoutes);

  authRoutes.post('/register', AuthenticationController.register);
  authRoutes.post('/login', requireLogin, AuthenticationController.login);


  apiRoutes.use('/chat', chatRoutes);

  chatRoutes.get('/', requireAuth, ChatController.getConversations);
  chatRoutes.get('/:conversationId', requireAuth, ChatController.getConversation);
  chatRoutes.post('/:conversationId', requireAuth, ChatController.sendReply);
  chatRoutes.post('/new/:recipient', requireAuth, ChatController.newConversation);

  app.use('/', apiRoutes);
}
