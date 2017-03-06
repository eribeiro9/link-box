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
  if (!req.body.recipient) {
    res.status(422).json({ error: 'Please choose a valid recipient for your message.' });
    return next();
  }

  ChatService.newConversation(req.body.recipient, req.user._id).save((err) => {
    if (err) res.json({ error: err });
    else return res.status(201).json({ message: 'Conversation successfully started!' });
  });
}

export function newMessage (req, res) {
  let convId = req.params.conversationId,
    link = req.body.link,
    desc = req.body.description,
    author = req.user._id;

  ChatService.newMessage(convId, link, desc, author).save((err) => {
    if (err) res.json({ error: err });
    else return res.status(201).json({ message: 'Reply successfully sent!' });
  });
}
