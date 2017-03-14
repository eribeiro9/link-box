import express from 'express';
import passport from 'passport';

import './config/passport';
import {
  AuthenticationController,
  ChatController,
  UserController
} from './controllers';

let requireAuth = passport.authenticate('jwt', { session: false });
let requireLogin = passport.authenticate('local', { session: false });

export function router (app) {
  let apiRoutes = express.Router();
  let authRoutes = express.Router();
  let chatRoutes = express.Router();
  let userRoutes = express.Router();

  apiRoutes.use('/auth', authRoutes);
  authRoutes.post('/register', AuthenticationController.register);
  authRoutes.post('/login', requireLogin, AuthenticationController.login);


  apiRoutes.use('/chat', chatRoutes);
  chatRoutes.get('/', requireAuth, ChatController.getConversations);
  chatRoutes.post('/', requireAuth, ChatController.newConversation);
  chatRoutes.get('/:conversationId', requireAuth, ChatController.getConversation);
  chatRoutes.post('/:conversationId', requireAuth, ChatController.newMessage);


  apiRoutes.use('/users', userRoutes);
  userRoutes.get('/', requireAuth, UserController.getUsers);
  userRoutes.get('/bookmarks', requireAuth, UserController.getBookmarks);
  userRoutes.post('/bookmarks', requireAuth, UserController.addBookmark);
  userRoutes.put('/bookmarks/:bookmarkId', requireAuth, UserController.editBookmark);
  userRoutes.post('/bookmarks/:bookmarkId', requireAuth, UserController.deleteBookmark);

  app.use('/', apiRoutes);
}
