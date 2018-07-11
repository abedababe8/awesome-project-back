//getting environment

const env = process.env.NODE_ENV || 'development'
//getting configuration for environment

const config = require('../knexfile')[env]
//creating connection to db

const connection = require('knex')(config)

module.exports = connection
