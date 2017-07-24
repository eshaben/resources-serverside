const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')
const dbConfig = config[environment]
const knex = require('knex')

module.exports = knex(dbConfig)
