var express = require('express');
var router = express.Router();
var knex = require('../knex');


//a simple test url to check that all of our files are communicating correctly.
router.get('/', (req, res, next) => {
  knex('items')
  .then((data) => {
    console.log('data', data)
    res.send(data)
  })
});

//to create a new item
router.post('/', (req, res, next) => {
  let itemInfo = {
    name: req.params.itemName
  };
  knex('items')
  .insert(itemInfo)
  .then((data) => {
    console.log('sucessfully created new item');
    res.statusCode = 200;
    return res.json(itemInfo);
  })
  .catch(function(error) {
    console.error(error);
    res.statusCode = 500;
    return res.json({
      errors: ['Failed to create new item']
    })
  });
});

module.exports = router;
