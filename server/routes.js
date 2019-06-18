const router = require('express').Router();
const controllers = require('./controllers.js');

// user interactions from the front-end
router
  .route('/cards')
  .get(controllers.getNextCards)
  .post(controllers.postNewCard)
  .delete(controllers.deleteCard);

module.exports = router;
