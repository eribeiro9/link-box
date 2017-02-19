import { Conversation } from '../models/conversation';
import { Message } from '../models/message';

export function getConversations (req, res, next) {
  Conversation.find({ participants: req.user._id })
    .select('_id')
    .exec((err, conversations) => {
      if (err) {
        res.send({ error: err });
        return next(err);
      }

      return res.status(200).json({ conversations: conversations });
    });
}

export function getConversation (req, res, next) {
  Message.find({ conversationId: req.params.conversationId })
    .select('createdAt link author')
    .sort('-createdAt')
    .populate({
      path: 'author',
      select: 'profile.firstName profile.lastName'
    })
    .exec((err, messages) => {
      if (err) {
        res.send({ error: err });
        return next(err);
      }

      return res.status(200).json({ conversation: messages });
    });
}

export function newConversation (req, res, next) {
  if (!req.params.recipient) {
    res.status(422).send({ error: 'Please choose a valid recipient for your message.' });
    return next();
  }

  if (!req.body.composedMessage) {
    res.status(422).send({ error: 'Please enter a message.' });
    return next();
  }

  const conversation = new Conversation({
    participants: [req.user._id, req.params.recipient]
  });

  conversation.save((err, newConversation) => {
    if (err) {
      res.send({ error: err });
      return next(err);
    }

    const message = new Message({
      conversationId: newConversation._id,
      link: req.body.composedMessage,
      author: req.user._id
    });

    message.save((err/*, newMessage*/) => {
      if (err) {
        res.send({ error: err });
        return next(err);
      }

      return res.status(200).json({
        message: 'Conversation started!',
        conversationId: conversation._id
      });
    });
  });
}

export function sendReply (req, res, next) {
  const reply = new Message({
    conversationId: req.params.conversationId,
    link: req.body.composedMessage,
    author: req.user._id
  });

  reply.save((err/*, sentReply*/) => {
    if (err) {
      res.send({ error: err });
      return next(err);
    }

    return res.status(200).json({ message: 'Reply successfully sent!' });
  });
}
