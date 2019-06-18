const mongoose = require('mongoose');
const { artistList } = require('../artistList.js');

mongoose.set('useCreateIndex', true);

const cardSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true
  },
  artistName: String,
  picUrl: String,
  fact: String
});

const renderDBArtistObjects = (arr) => {
  let counter = 1;
  return arr.map(artist => {
    return {
      id: counter += 1,
      artistName: artist.name,
      picUrl: artist.images[1].url,
      fact: `${artist.name} is a ${artist.genres[0]} artist with ${artist.followers.total} followers and a popularity rating of ${artist.popularity} on Spotify.`
    };
  });
};

const databaseArtists = renderDBArtistObjects(artistList.artists);

const Card = new mongoose.model('Card', cardSchema);

Card.insertMany(databaseArtists, function(error, docs) {});

module.exports = Card;
