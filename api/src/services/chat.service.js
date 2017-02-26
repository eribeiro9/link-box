import {
  Conversation,
  Message
} from '../models';

export const ChatService = {
  getConversations(userId) {
    return Conversation
      .find({ participants: userId })
      .populate('participants', '_id username');
  },

  getConversation(conversationId) {
    return Message
      .find({ conversationId: conversationId })
      .select('createdAt link description author')
      .sort('-createdAt')
      .populate({
        path: 'author',
        select: '_id username'
      });
  },

  // newConversation(recipient, link, description, author) { }

  newMessage(conversationId, link, description, author) {
    return new Message({
      conversationId: conversationId,
      link: link,
      description: description,
      author: author
    });
  }
};
