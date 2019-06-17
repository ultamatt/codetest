// const { Cards } = require('../database/model');
const axios = require('axios');

module.exports = {
  // controllers for seeding the database

  // posts to the Spotify API to receive an authorization token
  getAPIToken: (req, res) => {
    console.log('IN getAPIToken');
  },
  // requests 50 artist objects from Spotify's API and seeds the database
  getInitialCards: (req, res) => {
    console.log('IN getInitialCards');
  },

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
