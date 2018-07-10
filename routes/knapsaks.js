var express = require('express');
var router = express.Router();
var knex = require('../knex');


// a simple test url to check that all of our files are communicating correctly.
/*GET - all saved knapsaks belonging to that user*/
router.get('/', (req, res, next) => {
  console.log('user knapsak hit')
  knex('knapsaks')
  .then((data) => {
    console.log('data', data)
    res.send(data)
  })
});


  // select()
  //   .then((knapsaks) => {
  //     response.status(200).json(knapsaks);
  //   })
  //   .catch((error) => {
  //     response.status(500).json({ error });
  //   });




/*POST - save a new knapsak for a user*/
// router.post('/users/:id/knapsaks/:id')





/*UPDATE - update the contents of a particular knapsak belonging to the user*/
// router.put('/users/:id/knapsaks/:id')


module.exports = router;
