const express = require('express');
const router = express.Router();
const knex = require('../knex');




/* GET ALL users listing. */
// router.get('/', function(req, res, next) {
//   //USE KNEX TO GET ALL USERS
//   knex('users')
//   .then((data) => {
//     console.log('data', data)
//     res.send(data)
//   })
// });




// a simple test url to check that all of our files are communicating correctly.
/*GET - a specific saved knapsak belonging to that user*/
router.get('/users/:id/knapsaks', (req, res) => {
  console.log('user knapsak hit')
  knex('knapsaks')
  .where('user_id', req.params.userid)
  .then((data) => {
    console.log('data', data)
    res.send(data)
  })



  // select()
  //   .then((knapsaks) => {
  //     response.status(200).json(knapsaks);
  //   })
  //   .catch((error) => {
  //     response.status(500).json({ error });
  //   });
});



/*POST - save a new knapsak for a user*/
router.post('/users/:id/knapsaks/:id')





/*UPDATE - update the contents of a particular knapsak belonging to the user*/
router.put('/users/:id/knapsaks/:id')


module.exports = router;
