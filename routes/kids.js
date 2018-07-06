var express = require('express');
var router = express.Router();
var knex = require('../knex');

// GET all kids listings
router.get('/', function(req, res, next) {
  knex('kids')
  .then((data) => {
    // console.log('data', data)
    res.send(data)
  })
  .catch((err) => {
    next(err)
  })
});

// GET listing for a single kid
router.get('/:kidsid', function(req, res, next) {
  knex('kids')
  .where('id', req.params.userid)
  .then((data) => {
    // console.log('please take these kids before I lose my mind', data)
    res.send(data)
  })
  .catch((err) => {
    next(err)
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
      // console.log('successfully created kid entry');
      res.statusCode = 200;
      return res.json(userInfo);
    })
    .catch((err) => {
      next(err)
    })
});

// PUT update one record for this table
router.put('/:id', (req, res, next) => {
  knex('tablename')
  .where('id', req.params.id)
  .then((data) => {
    knex('tablename')
    .where('id', req.params.id)
    .limit(1)
    .update({
      "colname1": req.body.colname1,
      "colname2": req.body.colname2,
      "colname3": req.body.colname3
    })
    .returning('*')
    .then((data) => {
      res.json(data[0])
    })
  })
  .catch((err) => {
    next(err)
  })
})

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
    .catch((err) => {
      next(err)
    })
  });

module.exports = router;