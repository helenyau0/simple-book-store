const router = require('express').Router()
const db = require('../../models/book.js')

router.post('/add', (req, res) => {
  const book = req.body

  db.remove(book)
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
    res.redirect('/')
  })
})

router.post('/update/:id', (req, res) => {
  const body = req.body.updatedBook
  const id = req.params.id

  db.update(id, body)
  .then(book => {
    res.render('book', { book })
  })
})



module.exports = router
