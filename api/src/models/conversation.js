import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let ConversationSchema = new Schema({
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

export const Conversation = mongoose.model('Conversation', ConversationSchema);
