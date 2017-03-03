import {
  Conversation,
  Message
} from '../models';
import { ChatService } from '../services/chat.service';

export function getConversations (req, res) {
  ChatService.getConversations(req.user._id).exec((err, conversations) => {
    if (err) res.json({ error: err });
    else res.status(200).json({ userId: req.user._id, conversations: conversations });
  });
}

export function getConversation (req, res) {
  ChatService.getConversation(req.params.conversationId).exec((err, conversation) => {
    if (err) res.json({ error: err });
    else res.status(200).json({ conversation: conversation });
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

export function sendReply (req, res) {
  let convId = req.params.conversationId,
    link = req.body.link,
    desc = req.body.desc,
    author = req.user._id;

  ChatService.newMessage(convId, link, desc, author).save((err) => {
    if (err) res.json({ error: err });
    else return res.status(200).json({ message: 'Reply successfully sent!' });
  });
}
