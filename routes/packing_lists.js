var express = require('express');
var router = express.Router();
var knex = require('../knex');



//GET listing of all items and in what quantities are in a specific knapsak*/
router.get('/:knapsakid', function(req, res, next) {
  knex('packing_lists')
  .where('knapsak_id', req.params.knapsakid)
  .then((packingList) => {
    console.log(packingList);
    if(packingList.length>0) {
      // we are sure that the user exists
      res.send(packingList);
    } else {
    // packing_list wasn't found
      throw new Error('Oops, no packing_list with that id')
    }
  })
  .catch((error) => {
    console.error(error);
    res.statusCode = 500;
    return res.json({
      errors: 'There are no items on that packing_list'
    })
  })
});







/*POST - create a new packing_list_item*/
router.post('/', function(req, res, next) {
  let packing_listInfo = {
    knapsak_id: req.body.knapsakid,
    item_id: req.body.itemid,
    quantity: req.body

  };
  knex('packing_lists')
    .insert(packing_listInfo)
    .then((data) => {
      console.log('sucessfully created new packing_list');
      res.statusCode = 200;
      return res.json(packing_listInfo);
    })
    .catch(function(error) {
      console.error(error);
      res.statusCode = 500;
      return res.json({
        errors: ['Failed to create new packing_list']
      })
    });
});

/*UPDATE - update the quantity of a specific packing_list item*/
router.put('/:packingListid', function(req, res, next) {
  knex('packing_lists')
    .where('id', req.params.packingListId)
    .then(function(packing_list) {
      console.log(packing_list);

      // was the packing_list found?
      if(packing_list.length>0) {
        // we are sure that the packing_list exists
        knex('packing_lists')
        .where('id', req.params.packingListId)
        .update({
          knapsak_id: req.body.knapsakId,
          item_id: req.body.itemId,
          quantity: req.body.quantity
        })
        .return('*')
        .then(function(updatedPacking_List) {
          console.log('successfully updated that packing_list');
          res.statusCode = 200;
          return res.json('packing_lists was successfully updated');
        })
      } else {
        // user wasn't found
        throw new Error('Oops, no packing_list with that id')
      }
    })
    .catch((error) => {
      console.error(error);
      res.statusCode = 500;
      return res.json({
        errors: 'Failed to update packing_lists with specified id'
      })
    })
  });

  /*DELETE - delete all items on a specific packing_list*/
  router.delete('/:knapsakid', function(req, res, next) {
    knex('packing_lists')
      .where('knapsak_id', req.params.knapsakid)
      .del()
      .then((data) => {
        console.log('successfully deleted specified packing_list');
        res.statusCode = 200;
        return res.json('user successfully deleted that packing_list');
      })
      .catch((error) => {
        console.error(error);
        res.statusCode = 500;
        return res.json({
          errors: 'Failed to delete packing_list'
        })
      })
    });




  module.exports = router;
