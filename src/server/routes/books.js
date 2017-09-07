const router = require('express').Router()
const db = require('../../models/book.js')

router.get('/', (req, res) => {
  db.getAll()
  .then(books => {
    res.render('allBooks', { books })
  })
})

router.post('/add', (req, res) => {
  const book = req.body
  db.add(book)
  .then(books => {
    res.redirect('/book')
  })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  db.get(id)
  .then(book => {
    res.render('book', { book })
  })
})

router.get('/delete/:id', (req, res) => {
  const { id } = req.params
  db.remove(id)
  .then(() => {
    res.redirect('/book')
  })
})



module.exports = router
