const router = require('express').Router();
const controllers = require('./controllers.js');

// requests that seed the database with 50 musical artists from Spotify's API
router
  .route('/seedDatabase')
  .get(controllers.getInitialCards)
  .post(controllers.getAPIToken);

// user interactions from the front-end
router
  .route('/cards')
  .get(controllers.getNextCards)
  .post(controllers.postNewCard)
  .delete(controllers.deleteCard);

module.exports = router;
