const mongoose = require("mongoose"); // para interactuar con la base de datos de mongodb
const Schema = mongoose.Schema; //

const CommentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    // cuerpo del comentario
    type: String,
    required: true,
  },
  recipientForum: {
    type: mongoose.Schema.Types.ObjectId, //! duda sobre el cochetes al inicio
    ref: "Forum",
  },
  recipientCompany: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  tags: [String], //!! duda
  recipientForum: {
    type: mongoose.Schema.Types.ObjectId, //! tags
    ref: "Forum",
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  thread: {
    // hilo
    type: mongoose.Schema.Types.ObjectId,
    ref: "Thread",
  },
  timestamps: true,
});

//! cuando hacemos referencias, tenemo que crear un modelo de datos ?
const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
