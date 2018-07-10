const express = require('express');
const router = express.Router();






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


// a simple test url to check that all of our files are communicating correctly.
/*GET - a specific saved knapsak belonging to that user*/
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





/*UPDATE - update the contents of a particular knapsak belonging to the user*/
router.put('/users/:id/knapsaks/:id')


module.exports = router;
