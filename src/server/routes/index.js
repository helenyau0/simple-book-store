const router = require('express').Router()
const books = require('./book')

router.use('/books', books)

module.exports = router
