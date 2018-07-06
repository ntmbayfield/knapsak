var express = require('express');
var router = express.Router();
var knex = require('../knex');



/* GET ALL users listing. */
router.get('/', function(req, res, next) {
  //USE KNEX TO GET ALL USERS
  knex('users')
  .then((data) => {
    console.log('data', data)
    res.send(data)
  })
});

/* GET listing for a single user*/
router.get('/:userid', function(req, res, next) {
  //USE KNEX TO GET ALL USERS
  knex('users')
  .where('id', req.params.userid)
  .then((data) => {
    console.log('the specific user', data)
    res.send(data)
  })
});

/*POST - create a new user*/
router.post('/', function(req, res, next) {
  let userInfo = {
    name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      // hashpassword: "todo"
  };
  knex('users')
    .insert(userInfo)
    .then((data) => {
      console.log('sucessfully created user account');
      res.statusCode = 200;
      return res.json(userInfo);
    })
    .catch(function(error) {
      console.error(error);
      res.statusCode = 500;
      return res.json({
        errors: ['Failed to create user account']
      })
    });
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
    // .del()
    // .then((data) => {
    // if (data.length > 1 || data.length < 1) {
    //   throw new Error('can only delete one user account per request');
    // }
  });

module.exports = router;
