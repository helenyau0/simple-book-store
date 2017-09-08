const router = require('express').Router()
const books = require('./books')
const db = require('../../models/book.js')

router.get('/', (req, res) => {
  const page = ( parseInt( req.query.page, 10 ) ) || 1
  db.getAll(page)
  .then(books => {
    res.render('allBooks', { books, page })
  })
})

router.use('/book', books)

module.exports = router
