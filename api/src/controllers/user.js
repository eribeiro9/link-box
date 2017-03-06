import {
  ChatService,
  UserService
} from '../services';

export function getUsers (req, res, next) {
  UserService.getUsers().exec((err, users) => {
    if (err) {
      res.json({ error: err });
      return next();
    }
    ChatService.getConversations(req.user._id).exec((err, conversations) => {
      if (err) res.json({ error: err });
      else res.status(200).json({ userId: req.user._id, conversations, users });
    });
  });
}
