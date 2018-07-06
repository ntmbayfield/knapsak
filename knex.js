const environment = process.env.NODE_ENV || 'development'
console.log('ENV', environment);
const knexConfig = require('./knexfile')[environment]
const knex = require('knex')(knexConfig)

module.exports = knex
