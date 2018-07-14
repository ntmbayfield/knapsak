const express = require('express');
const router = express.Router({mergeParams: true});
const knex = require('../knex');



/*GET /users/:userid/knapsaks - retrieves all saved knapsaks belonging to that user*/
router.get('/', (req, res, next) => {
  console.log('users knapsaks hit')
  knex('knapsaks')
  .where('user_id', req.params.userid)
  .then((data) => {
    console.log('data', data)
    res.send(data)
  })
});


/*GET /users/:userid/knapsaks/:knapsakid - retrieve a specific saved knapsak belonging to a particular user*/
router.get('/:knapsakid', (req, res, next) => {
  console.log('user\'s specific knapsak hit')
  knex('knapsaks')
  .where('user_id', req.params.userid)
  .andWhere('id', req.params.knapsakid)
  .then((data) => {
    console.log('data', data)
    res.send(data)
  })
});



/*POST /users/:userid/knapsaks/new - save a new knapsak for a user*/
router.post('/new', (req, res, next) => {
  let knapsakInfo = {
    userid: req.params.userid,
    description: req.body.description,
    kidid: req.body.kidid
  };
  knex('knapsaks')
  .insert(knapsakInfo)
  .then((data) => {
    console.log('sucessfully created new knapsak');
    res.statusCode = 200;
    return res.json(knapsakInfo);
  })
  .catch(function(error) {
    console.error(error);
    res.statusCode = 500;
    return res.json({
      errors: ['Failed to create new knapsak in user\'s account']
    })
  });
});





/*UPDATE /users/:userid/knapsaks/:knapsakid - update the contents of a particular knapsak belonging to the user*/
router.put('/:knapsakid', (req, res, next) => {
  knex('knapsaks')
  .where('user_id', req.params.userid)
  .andWhere('id', req.params.knapsakid)
  .then(function(knapsak) {
    console.log(knapsak);
    if(knapsak.length>0) {
      // we are sure that the knapsak exists
      knex('knapsaks')
      .where('id', req.params.knapsakid)
      .update({
        user_id: req.body.user_id,
        description: req.body.description,
        kid_id: req.body.kid_id
      })
      .return('*')
      .then(function(updatedKnapsaks) {
        console.log('successfully updated user\'s knapsak');
        res.statusCode = 200;
        return res.json('user\'s knapsak was successfully updated');
      })
    } else {
      // knapsak wasn't found
      throw new Error('Oops, no knapsak with that id')
    }
  })
    .catch((error) => {
      console.error(error);
      res.statusCode = 500;
      return res.json({
        errors: 'Failed to update knapsak with specified id'
      })
    })
})


/*DELETE /users/:userid/knapsaks/:knapsakid - delete a particular knapsak belonging to a user*/
router.delete('/:knapsakid', (req, res, next) => {
    knex('knapsaks')
    .where('user_id', req.params.userid)
    .andWhere('id', req.params.knapsakid)
    .del()
    .then((data) => {
      console.log('successfully deleted the user\'s knapsak');
      res.statusCode = 200;
      return res.json('user\'s knapsak was successfully deleted');
    })
    .catch((error) => {
      console.error(error);
      res.statusCode = 500;
      return res.json({
        errors: 'Failed to delete user\'s knapsak'
      })
    })
})


module.exports = router;
