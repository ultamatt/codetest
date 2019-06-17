const Card = require('../database/models');

console.log('THIS IS THE CARD----------', Card);

module.exports = {

  // controllers for user interactions

  // gets next 10 cards/documents from the database
  getNextCards: (req, res) => {
    console.log('IN getNextCards');

    const { id } = req.query;

    Card.find({ id: { $gte: 1, $lte: 10 } })
      .then(cards => res.status(200).send(cards))
      .catch(err => res.status(404).send('Error getting cards', err));
  },
  // posts a new card/document to the database
  postNewCard: (req, res) => {
    console.log('IN postNewCard');
  },
  // deletes a card/document from the database
  deleteCard: (req, res) => {
    console.log('IN deleteCard');
  },
};
