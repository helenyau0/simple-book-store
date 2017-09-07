const pgp = require('pg-promise')()
const connection = 'postgres://localhost:5432/simple-bookstore'
const db = pgp(connection)

module.exports = db
