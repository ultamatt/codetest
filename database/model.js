const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const cardSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
    unique: true
  },
  artistName: String,
  picUrl: String,
  fact: String
});

const Card = new mongoose.model('Card', cardSchema);

module.exports = Card;