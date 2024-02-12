const mongoose = require("mongoose"); // para interactuar con la base de datos de mongodb
const Schema = mongoose.Schema; //

const CommentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  recipientNews: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "comments",
  },
  recipientForum: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "comments",
  },
  recipientCompany: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userReviews",
  },
  tags: [String],
  recipientForum: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "forum",
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  timestamps: true,
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
