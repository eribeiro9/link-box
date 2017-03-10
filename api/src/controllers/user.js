import {
  ChatService,
  UserService
} from '../services';

export const UserController = {
  getUsers (req, res, next) {
    UserService.getUsers((err, users) => {
      if (err) {
        res.json({ error: err });
        return next();
      }
      ChatService.getConversations(req.user._id, (err, conversations) => {
        if (err) res.json({ error: err });
        else res.status(200).json({ userId: req.user._id, conversations, users });
      });
    });
  }
};
