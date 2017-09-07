const router = require('express').Router()
const books = require('./books')
const db = require('../../models/book.js')

router.get('/', (req, res) => {
  db.getAll()
  .then(books => {
    res.render('allBooks', { books })
  })
})

router.use('/book', books)

module.exports = router
