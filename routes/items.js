var express = require('express');
var router = express.Router();
var knex = require('../knex');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', (req, res) => {
  knex('items')
  .then((data) => {
    console.log('data', data)
    res.send(data)
  })
});

module.exports = router;
