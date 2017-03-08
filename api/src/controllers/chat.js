import { ChatService } from '../services';

export const ChatController = {
  getConversations (req, res) {
    ChatService.getConversations(req.user._id, (err, conversations) => {
      if (err) res.json({ error: err });
      else res.status(200).json({ userId: req.user._id, conversations });
    });
  },

  getConversation (req, res, next) {
    let convId = req.params.conversationId;
    ChatService.getConversationMessages(convId, (err, messages) => {
      if (err) {
        res.json({ error: err });
        return next();
      }
      ChatService.getConversationParticipant(convId, req.user._id, (err, p) => {
        if (err) res.json({ error: err });
        else res.status(200).json({
          userId: req.user._id,
          participant: p[0].participants[0].username,
          conversation: messages
        });
      });
    });
  },

  newConversation (req, res, next) {
    if (!req.body.recipient) {
      res.status(422).json({ error: 'Please choose a valid recipient for your message.' });
      return next();
    }

    ChatService.newConversation([req.body.recipient, req.user._id], (err) => {
      if (err) res.json({ error: err });
      else return res.status(201).json({ message: 'Conversation successfully started!' });
    });
  },

  newMessage (req, res) {
    let convId = req.params.conversationId,
      link = req.body.link,
      desc = req.body.description,
      author = req.user._id;

    ChatService.newMessage(convId, link, desc, author, (err) => {
      if (err) res.json({ error: err });
      else return res.status(201).json({ message: 'Reply successfully sent!' });
    });
  }
};
