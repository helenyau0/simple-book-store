const pgp = require('pg-promise')()
const cn = process.env.DATABASE_URL || 'postgres://localhost:5432/bookstore';
const db = pgp(cn)

module.exports = db
