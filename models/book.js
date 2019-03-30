const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: { type: String, },
});

const bookSchema = new Schema({
  title: { type: String, required: true },
  type:[authorSchema],
  description: { type: String, },
  image: { type: String, },
  link: { type: String, },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;