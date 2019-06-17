const Card = require('../database/models');

module.exports = {

  // controllers for user interactions

  // gets next 10 cards/documents from the database
  getNextCards: (req, res) => {

    const { id } = req.query;
    const upperBound = parseInt(id) + 9;
    let firstGet;

    Card.find({ id: { $gte: id, $lte: upperBound } })

    // if a card has been deleted from the database - make sure getNextCards still returns 10 cards

      .then(cards => {
        if (cards.length < 10) {
          firstGet = cards;
          const missingCards = 10 - cards.length;       
          const lastId = cards[cards.length - 1].id + 1;
          Card.find({ id: { $gte: lastId, $lt: lastId + missingCards } })
            .then(newCards => res.status(200).send(firstGet.concat(newCards)));
        } else {
          res.status(200).send(cards);
        }
      })
      .catch(err => console.log('Error getting cards', err));
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
