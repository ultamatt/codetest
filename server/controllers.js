const Card = require('../database/models');

let cardCount = 50;

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
    const { artistName, picUrl, fact } = req.body;

    Card.create({
      id: cardCount, artistName, picUrl, fact
    })
      .then(() => res.status(201).send('Success creating new card'))
      .catch(err => console.log('Error creating new card', err));
  },
  // deletes a card/document from the database
  deleteCard: (req, res) => {
    const { id } = req.query;

    Card.deleteOne({ id })
      .then(() => res.status(202).send('Success deleting artist'))
      .catch(err => console.log('Error deleting card', err));
  },
};
