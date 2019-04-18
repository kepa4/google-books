var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: [String],
    required: true,
  },
  description: String,
  link: String,
  image: String,
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;