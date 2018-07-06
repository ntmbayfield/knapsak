var express = require('express');
var router = express.Router();
var knex = require('../knex');

// GET all kids listings
router.get('/', function(req, res, next) {
  knex('kids')
  .then((data) => {
    console.log('data', data)
    res.send(data)
  })
});

// GET listing for a single kid
router.get('/:kidsid', function(req, res, next) {
  knex('kids')
  .where('id', req.params.userid)
  .then((data) => {
    console.log('please take these kids before I lose my mind', data)
    res.send(data)
  })
});

// POST create a new kid
router.post('/', function(req, res, next) {
  let userInfo = {
    name: req.body.name
  };
  knex('kids')
    .insert(userInfo)
    .then((data) => {
      console.log('successfully created kid entry');
      res.statusCode = 200;
      return res.json(userInfo);
    })
    .catch(function(error) {
      console.error(error);
      res.statusCode = 500;
      return res.json({
        errors: ['Failed to create kid entry']
      })
    });
});

// PUT update an existing kid
// router.put('/', function(req, res, next) {
//   let userInfo = {
//     name: req.body.name
//   };
//   knex('kids')
//     .insert(userInfo)
//     .then((data) => {
//       console.log('successfully created kid entry');
//       res.statusCode = 200;
//       return res.json(userInfo);
//     })
//     .catch(function(error) {
//       console.error(error);
//       res.statusCode = 500;
//       return res.json({
//         errors: ['Failed to create kid entry']
//       })
//     });
// });

// DELETE a user aka 'you're adopted'
router.delete('/:kidsid', function(req, res, next) {
  knex('kids')
    .where('id', req.params.userid)
    .del()
    .then((data) => {
      console.log('successfully deleted a kid\'s entry');
      res.statusCode = 200;
      return res.json('kid successfully deleted');
    })
    .catch((error) => {
      console.error(error);
      res.statusCode = 500;
      return res.json({
        errors: 'Failed to delete kid\'s entry'
      })
    })
  });

module.exports = router;