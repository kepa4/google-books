var axios = require('axios');
var router = require('express').Router();
var Book = require('../models/book.js');
var mongoose = require('mongoose');

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/googleBooks';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

var db = mongoose.connection;

db.once('open', function() {
  console.log('Mongoose connection successful.');
});

router.get('/books', (req, res) => {
  axios
    .get('https://www.googleapis.com/books/v1/volumes/', {
      params: req.query
    })
    .then(results => {
      res.json(results.data);
    })
    .catch(err => res.status(422).json(err));
});

router.post('/books', (req, res) => {
  Book.create(req.body)
    .then(function(dbBook) {
      res.json(dbBook);
    })
    .catch(function(err) {
      res.json(err);
    });
});

router.get('/savedbooks', function(req, res) {
  Book.find(req.query)
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.delete('/books/:id', (req, res) => {
  Book.deleteOne({ _id: req.params.id }).then(function(response) {
    res.json(response);
  });
});

module.exports = router;