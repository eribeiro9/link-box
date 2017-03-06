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

  getConversationParticipant(conversationId, userId) {
    return Conversation
      .find({ _id: conversationId })
      .select('participants')
      .populate({
        path: 'participants',
        match: { _id: { $ne: userId } },
        select: 'username',
        options: { limit: 1 }
      });
  },

  getConversationMessages(conversationId) {
    return Message
      .find({ conversationId: conversationId })
      .select('createdAt link description author')
      .sort('-createdAt')
      .populate({
        path: 'author',
        select: '_id username'
      });
  },

  newConversation(...participants) {
    return new Conversation({
      participants: participants
    });
  },

  newMessage(conversationId, link, description, author) {
    return new Message({
      conversationId: conversationId,
      link: link,
      description: description,
      author: author
    });
  }
};
