const express = require('express');
const router = express.Router({mergeParams: true});
const knex = require('../knex');



//GET /users/:userid/knapsaks/:knapsakid/packing_list - retrieve list of all items and in what quantities are in a specific knapsak*/
router.get('/', function(req, res, next) {
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

//GET /users/:userid/knapsaks/:knapsakid/packing_list/:packinglistid - retrieve list of all items and in what quantities are in a specific knapsak*/
router.get('/:packinglistid', function(req, res, next) {
  knex('packing_lists')
  .where('knapsak_id', req.params.knapsakid)
  .andWhere('id', req.params.packinglistid)
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

/*POST /users/:userid/knapsaks/:knapsakid/packing_lists - create a new packing_lists item*/
router.post('/new', function(req, res, next) {
  let packing_listInfo = {
    knapsak_id: req.body.knapsakid,
    item_id: req.body.itemid,
    quantity: req.body.quantity
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

/*UPDATE /users/:userid/knapsaks/:knapsakid/packing_lists/:packinglistid - update the quantity of a specific packing_list item*/
router.put('/:packinglistid', function(req, res, next) {
  knex('packing_lists')
    .where('id', req.params.packinglistid)
    .then(function(packing_list) {
      console.log(packing_list);

      // was the packing_list found?
      if(packing_list.length>0) {
        // we are sure that the packinglist exists
        knex('packing_lists')
        .where('id', req.params.packinglistid)
        .update({
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

  /*DELETE /users/:userid/knapsaks/:knapsakid/packing_lists/:packinglistid - delete a specific packing_lists item from a knapsak*/
  router.delete('/:packinglistid', function(req, res, next) {
    knex('packing_lists')
      .where('knapsak_id', req.params.knapsakid)
      .andWhere('id', req.params.packinglistid)
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
