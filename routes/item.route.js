const express = require('express');
const router = express.Router();
const knex = require('../knex');


// a simple test url to check that all of our files are communicating correctly.
router.get('/items', (req, res) => {
  knex('items')
  .then((data) => {
    console.log('data', data)
    res.send(data)
  })
});
module.exports = router;
