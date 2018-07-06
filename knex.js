<<<<<<< HEAD
const environment = process.env.NODE_ENV || 'development'
console.log('ENV', environment);
=======
'use strict'

const environment = process.env.NODE_ENV || 'development'
>>>>>>> 9d87140404129638e59d1543457b0619a9a81e71
const knexConfig = require('./knexfile')[environment]
const knex = require('knex')(knexConfig)

module.exports = knex
