// ==================================================
//   MODIFIED for testing POST ROUTE to make it work
// ==================================================


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
  console.log(req.body, 'reqbody')
  res.send('iam here')

  // CREATE one users
    // Look for some provided Body data
    // req.body
    // create new user in DB with KNEX
    // SQL INSERT

    //TESTING to hit the DB
    knex('users')
    .insert(req.body)
    .returning('*')
    .then((result) => {
      let insertedRecord = result[0]
      console.log('data', insertedRecord)
      // conclude the route with res.send
      res.send(insertedRecord)
    })


  // var sql = 'INSERT INTO users (name, email, password, hashpassword) VALUES ($1, $2, $3, $4)';
  // var data = [
  //   req.body.name,
  //   req.body.email,
  //   req.body.password,
  //   req.body.hashpassword
  // ];
  // knex (sql, data, function(err, result) {
  //   if (err) {
  //     console.error(err);
  //     res.statusCode = 500;
  //     return res.json({
  //       errors: ['Failed to create user account']
  //     })
  //   } else {
  //       res.statusCode = 200;
  //       return res.json({
  //         name: req.body.name,
  //         email: req.body.email,
  //         id: result.id
  //       });
  //     };
  // });
});

/*DELETE - delete a user*/
router.delete('/:id', function(req, res, next) {
  res.send('');
});

module.exports = router;
