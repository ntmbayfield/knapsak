var express = require('express');
var router = express.Router();
const knex = require('../knex');

const form = document.querySelector('form');
const input = document.getElementById('kidsName');
const button = document.querySelector('button');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  //get value from input and place in local storage
  localStorage.setItem('items', input.value);
  console.log('localstorage ', localStorage.getItem('items'));
});

// function UserSubmit()
//
// // CREATE one users
// router.post('/', (req, res, next) => {
//   // Look for some provided Body data
//   // req.body
//   console.log('req.body', req.body)
//   // create new user in DB with KNEX
//   // SQL INSERT
//   knex('users')
//   .insert({name: req.body.name})
//   .returning('*')
//   .then((result) => {
//     let insertedRecord = result[0]
//     console.log('data', insertedRecord)
//     // conclude the route with res.send
//     res.send(insertedRecord)
//   })
//
// })
