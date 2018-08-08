const express = require('express');
const router = express.Router();
const knex = require('../knex');

/***********************************************
            /users routes
***********************************************/

/* GET ALL users listing. */
router.get('/', function(req, res, next) {
  //USE KNEX TO GET ALL USERS
  knex('users')
  .then((data) => {
    console.log('data', data)
    res.send(data)
  })
});

/* GET all listings for a single user*/
router.get('/:userid', function(req, res, next) {
  //USE KNEX TO GET A SPECIFIC USER
  knex('users')
  .where('id', req.params.userid)
  .then((data) => {
    console.log('the specific user', data)
    res.send(data)
  })
});


// knex('users')
// .where('email', req.body.email)
// .then((data) => {
//   console.log('that email address belongs to the user with an id of', data)
//   res.send(data)
//   })
// });

/*POST - create a new user*/
router.post('/', function(req, res, next) {
  let userInfo = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
      // hashpassword: "todo"
  };
  knex('users')
    .insert(userInfo)
    .then((data) => {
      console.log('sucessfully created user account');
      res.statusCode = 200;
      return res.json(userInfo);
      console.log('user has an Id of ');
    })
    .catch(function(error) {
      console.error(error);
      res.statusCode = 500;
      return res.json({
        errors: ['Failed to create user account']
      })
    });
});

/*UPDATE - update a user*/
router.put('/:userid', function(req, res, next) {
  knex('users')
    .where('id', req.params.userid)
    .then(function(user) {
      console.log(user);

      // was the user found?
      if(user.length>0) {
        // we are sure that the user exists
        knex('users')
        .where('id', req.params.userid)
        .update({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        })
        .return('*')
        .then(function(updatedUser) {
          console.log('successfully updated a user\'s account');
          res.statusCode = 200;
          return res.json('user successfully updated');
        })
      } else {
        // user wasn't found
        throw new Error('Oops, no user with that id')
      }
    })
    .catch((error) => {
      console.error(error);
      res.statusCode = 500;
      return res.json({
        errors: 'Failed to update user\'s account'
      })
    })
  });


/*DELETE - delete a user*/
router.delete('/:userid', function(req, res, next) {
  knex('users')
    .where('id', req.params.userid)
    .del()
    .then((data) => {
      console.log('successfully deleted a user\'s account');
      res.statusCode = 200;
      return res.json('user successfully deleted');
    })
    .catch((error) => {
      console.error(error);
      res.statusCode = 500;
      return res.json({
        errors: 'Failed to delete user\'s account'
      })
    })
  });

/*************************************************
                /knapsaks routes
*************************************************/

const knapsaksroute = require('./knapsaks')

//GET /users/:userid/knapsaks
router.use('/:userid/knapsaks', knapsaksroute)

/*************************************************
                /packing_lists routes
*************************************************/

const packinglistsroute = require('./packing_lists')

//GET /users/:userid/knapsaks/:knapsakid/packing_lists
router.use('/:userid/knapsaks/:knapsakid/packing_lists', packinglistsroute)


module.exports = router;
