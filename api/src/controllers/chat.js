import { ChatService } from '../services';
import { ResponseHelper } from '../helpers';

export const ChatController = {
  getConversations (req, res) {
    ChatService.getConversations(req.user._id, (err, conversations) => {
      if (err) ResponseHelper.serverError(res, err);
      else ResponseHelper.success(res, { userId: req.user._id, conversations });
    });
  },

  getConversation (req, res, next) {
    let convId = req.params.conversationId;
    ChatService.getConversationMessages(convId, (err, messages) => {
      if (err) {
        ResponseHelper.serverError(res, err);
        return next();
      }
      ChatService.getConversationParticipant(convId, req.user._id, (err, p) => {
        if (err) ResponseHelper.serverError(res, err);
        else ResponseHelper.success(res, {
          userId: req.user._id,
          participant: p[0].participants[0].username,
          conversation: messages
        });
      });
    });
  },

  newConversation (req, res, next) {
    if (!req.body.recipient) {
      ResponseHelper.badRequest('Please choose a valid recipient for your message.');
      return next();
    }

    ChatService.newConversation([req.body.recipient, req.user._id], (err) => {
      if (err) ResponseHelper.serverError(res, err);
      else ResponseHelper.created(res, { message: 'Conversation successfully started!' });
    });
  },

  newMessage (req, res) {
    let convId = req.params.conversationId,
      link = req.body.link,
      desc = req.body.description,
      author = req.user._id;

    ChatService.newMessage(convId, link, desc, author, (err) => {
      if (err) ResponseHelper.serverError(res, err);
      else ResponseHelper.created(res, { message: 'Reply successfully sent!' });
    });
  }
};
