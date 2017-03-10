import {
  Conversation,
  Message
} from '../models';

export const ChatService = {
  getConversations(userId, callback) {
    return Conversation
      .find({ participants: userId })
      .populate('participants', '_id username')
      .exec(callback);
  },

  getConversationParticipant(conversationId, userId, callback) {
    return Conversation
      .find({ _id: conversationId })
      .select('participants')
      .populate({
        path: 'participants',
        match: { _id: { $ne: userId } },
        select: 'username'
      })
      .exec(callback);
  },

  getConversationMessages(conversationId, callback) {
    return Message
      .find({ conversationId: conversationId })
      .select('createdAt link description author')
      .sort('createdAt')
      .populate({
        path: 'author',
        select: '_id username'
      })
      .exec(callback);
  },

  newConversation(participants, callback) {
    return new Conversation({
      participants: participants
    }).save(callback);
  },

  newMessage(conversationId, link, description, author, callback) {
    return new Message({
      conversationId: conversationId,
      link: link,
      description: description,
      author: author
    }).save(callback);
  }
};
