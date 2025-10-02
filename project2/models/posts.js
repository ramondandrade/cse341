const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: function() {
      return this.isNew;
    }
  },
  createdAt: { type: Date, default: Date.now },
  tags: [{ type: String , default: [] }],
  likes: { type: Number, default: 0 },
  isPublished: { type: Boolean, default: false },
  imageUrl: { type: String },
  updatedAt: { type: Date }
});

module.exports = mongoose.model('Post', postSchema);