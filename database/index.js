const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/divaDeck', {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', err => console.log('connection error: ', err));
db.once('open', () => {
  console.log('Successfully connected to the database!');
});

module.exports = db;
