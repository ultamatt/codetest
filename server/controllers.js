const { Card } = require('../database/model');

module.exports = {

  // controllers for user interactions

  // gets next 10 cards/documents from the database
  getNextCards: (req, res) => {
    console.log('IN getNextCards');
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

