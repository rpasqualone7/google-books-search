const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  author: { type: Array, required: true },
  synopsis: { type: String, required: true },
  image: { type: String, required: true},
  link: { type: String, required: true},
  title: { type: String, required: true },
  
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
