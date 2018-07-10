var express = require('express');
var router = express.Router();
var knex = require('../knex');



/* GET ALL - knapsaks*/
router.get('/users/:id/knapsaks', function(req, res, next) {
  //USE KNEX TO GET ALL USERS
  knex('users/:id/knapsaks')
  .then((data) => {
    console.log('data', data)
    res.send(data)
  })
});

/* GET A - knapsak*/
router.get('/users/:id/knapsaks/:id', function(req, res, next) {
  //USE KNEX TO GET ALL USERS
  knex('users/:id/knapsaks')
  .where('id', req.params.knapsakid)
  .then((data) => {
    console.log('the specific knapsak', data)
    res.send(data)
  })
});

/*POST - create a new knapsak*/
router.post('/', function(req, res, next) {
  let knapsakInfo = {
    usersID: req.body.userID,
    description: req.body.description,
    kidsID: req.body.kidsID,
    // hashpassword: "todo"
  };
  knex('users')
    .insert(knapsakInfo)
    .then((data) => {
      console.log('sucessfully created new knapsak');
      res.statusCode = 200;
      return res.json(userInfo);
    })
    .catch(function(error) {
      console.error(error);
      res.statusCode = 500;
      return res.json({
        errors: ['Failed to create new knapsak']
      })
    });
});

/*UPDATE - update a knapsak*/
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


/*DELETE - delete a knapsak*/
router.delete('/:knapsakId', function(req, res, next) {
  knex('users')
    .where('id', req.params.knapsakId)
    .del()
    .then((data) => {
      console.log('successfully deleted user\'s specified knapsak');
      res.statusCode = 200;
      return res.json('knapsak with id#' + req.params.knapsakId + ' successfully deleted');
    })
    .catch((error) => {
      console.error(error);
      res.statusCode = 500;
      return res.json({
        errors: 'Failed to delete user\'s knapsak with id#' + req.params.id
      })
    })
  });

module.exports = router;
