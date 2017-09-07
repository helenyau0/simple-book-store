const router = require('express').Router()
const books = require('./books')

router.use('/book', books)

module.exports = router
