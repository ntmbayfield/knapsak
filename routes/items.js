const express = require('express');
const router = express.Router();
const knex = require('../knex');


//GET - all items
router.get('/', (req, res, next) => {

  knex('items')
  .then((data) => {
    console.log('data', data)
    res.send(data)
  })
});

//GET - a single item
router.get('/:itemid', (req, res, next) => {
  knex('items')
  .where('id', req.params.itemid)
  .then((data) => {
    console.log('data', data)
    res.send(data)
  })
})

//to create a new item
router.post('/', (req, res, next) => {
  let itemInfo = {
    itemName: req.body.itemName
  }
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

//Update an item
router.put('/:itemid', (req, res, next) => {
  knex('items')
  .where('id', req.params.itemid)
  .then(function(item) {
    console.log(item);
    if (item.length > 0) {
      knex('items')
      .where('id', req.params.itemid)
      .update({
        itemName: req.body.itemName,
        image: req.body.image
      })
      .return('*')
      .then(function(updatedItem) {
        console.log('successfully updated item');
        res.statusCode = 200;
        return res.json('item successfully updated');
      })
    } else {
      //item wasn't found
      throw new Error('Oops, no item with that id')
    }
  })
  .catch((error) => {
    console.error(error);
    res.statusCode = 500;
    return res.json({
      errors: 'Failed to update item'
    })
  });
});

//DELETE - an item
router.delete('/:itemid', (req, res, next) => {
  knex('items')
  .where('id', req.params.itemid)
  .del()
  .then((data) => {
    console.log('successfully deleted the item');
    res.statusCode = 200;
    return res.json('specified item was successfully deleted');
  })
  .catch((error) => {
    console.error(error);
    res.statusCode = 500;
    return res.json({
      errors: 'Failed to delete item'
    })
  });
});

module.exports = router;
