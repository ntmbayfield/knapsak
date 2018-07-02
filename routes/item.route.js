const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
// const item_controller = require('../controllers/item.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/knapsaks', (req, res) => {
  database('knapsaks').select()
    .then((knapsaks) => {
      response.status(200).json(knapsaks);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});
module.exports = router;
