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
  category: {
    type: String,
    /*enum: [] */ //! definir las opciones
    required: true,
  },
  recipientForo: {
    type: mongoose.Schema.Types.ObjectId, //! duda sobre el cochetes al inicio
    ref: "foro",
  },
  recipientCompany: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  tags: [String], //!! duda
  recipientForo: {
    type: mongoose.Schema.Types.ObjectId, //! tags
    ref: "Foro",
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
