const express = require('express');
const router = express.Router();



<<<<<<< HEAD
router.get('/knapsaks', (req, res) => {
=======
// a simple test url to check that all of our files are communicating correctly.
/*GET - list of all of a user's saved knapsaks*/
router.get('/users/:id/knapsaks', (req, res) => {
>>>>>>> 9d87140404129638e59d1543457b0619a9a81e71
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
