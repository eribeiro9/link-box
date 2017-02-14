import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let MessageSchema = new Schema({
  conversationId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

export const Message = mongoose.model('Message', MessageSchema);
