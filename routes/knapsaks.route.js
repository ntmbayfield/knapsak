const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
// const item_controller = require('../controllers/item.controller');


// a simple test url to check that all of our files are communicating correctly.
/*GET - list of all of a user's saved knapsaks*/
router.get('/users/:id/knapsaks', (req, res) => {
  database('knapsaks').select()
    .then((knapsaks) => {
      response.status(200).json(knapsaks);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

/*POST - save a new knapsak for a user*/
router.post('/users/:id/knapsaks/:id')
module.exports = router;
