const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/StreamVerse', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
});

const db = mongoose.connection;

module.exports = db;
