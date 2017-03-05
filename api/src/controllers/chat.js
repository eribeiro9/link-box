import {
  Conversation,
  Message
} from '../models';
import { ChatService } from '../services/chat.service';

export function getConversations (req, res) {
  ChatService.getConversations(req.user._id).exec((err, conversations) => {
    if (err) res.json({ error: err });
    else res.status(200).json({ userId: req.user._id, conversations });
  });
}

export function getConversation (req, res, next) {
  let convId = req.params.conversationId;
  ChatService.getConversationMessages(convId).exec((err, messages) => {
    if (err) {
      res.json({ error: err });
      return next();
    }
    ChatService.getConversationParticipant(convId, req.user._id).exec((err, p) => {
      if (err) res.json({ error: err });
      else res.status(200).json({
        userId: req.user._id,
        participant: p[0].participants[0].username,
        conversation: messages
      });
    });
  });
}

export function newConversation (req, res, next) {
  if (!req.params.recipient) {
    res.status(422).json({ error: 'Please choose a valid recipient for your message.' });
    return next();
  }

  if (!req.body.composedMessage) {
    res.status(422).json({ error: 'Please enter a message.' });
    return next();
  }

  const conversation = new Conversation({
    participants: [req.user._id, req.params.recipient]
  });

  conversation.save((err, newConversation) => {
    if (err) {
      res.json({ error: err });
      return next(err);
    }

    const message = new Message({
      conversationId: newConversation._id,
      link: req.body.composedMessage,
      author: req.user._id
    });

    message.save((err/*, newMessage*/) => {
      if (err) {
        res.json({ error: err });
        return next(err);
      }

      return res.status(200).json({
        message: 'Conversation started!',
        conversationId: conversation._id
      });
    });
  });
}

export function newMessage (req, res) {
  let convId = req.params.conversationId,
    link = req.body.link,
    desc = req.body.description,
    author = req.user._id;

  ChatService.newMessage(convId, link, desc, author).save((err) => {
    if (err) res.json({ error: err });
    else return res.status(200).json({ message: 'Reply successfully sent!' });
  });
}
