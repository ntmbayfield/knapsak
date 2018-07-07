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
  .catch((err) => {
    next(err)
  })
});

// GET listing for a single kid
router.get('/:kidsid', function(req, res, next) {
  knex('kids')
  .where('id', req.params.kidsid)
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    next(err)
  })
});

// POST create a new kid
router.post('/', function(req, res, next) {
  let kidsName = {
    name: req.body.name
  };
  knex('kids')
    .insert(kidsName)
    .then((data) => {
      // console.log('successfully created kid entry');
      res.statusCode = 200;
      return res.json(kidsName);
    })
    // .catch((err) => {
    //   next(err)
    // })
});

// PUT update kid name in kids
router.put('/:kidsid', (req, res, next) => {
  knex('kids')
  .where('id', req.params.kidsid)
  .then((data) => {
    knex('kids')
    .where('id', req.params.kidsid)
    .limit(1)
    .update({
      "name": req.body.name
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