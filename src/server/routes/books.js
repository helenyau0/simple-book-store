const router = require('express').Router()
const db = require('../../models/book.js')

router.post('/add', (req, res, next) => {
  const book = req.body

  console.log('add', req.body);

  db.create(book)
  .then(books => {
    res.redirect('/')
  })
  .catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
  const { id } = req.params

  db.get(id)
  .then(book => {
    res.render('book', { book })
  })
  .catch(err => next(err))
})

router.delete('/delete/:id', (req, res, next) => {
  const { id } = req.params

  db.remove(id)
  .then(() => {
    res.redirect('/')
  })
  .catch(err => next(err))
})

router.put('/update/:id', (req, res, next) => {
  const body = req.body.updatedBook
  const id = req.params.id
  db.update(id, body)
  .then(book => {
    res.redirect(`/book/${id}`)
  })
  .catch(err => next(err))
})

router.post('/search', (req, res, next) => {
  const query = req.body.q

  db.search(query)
  .then(book => {
    if(book) {
      return res.render('search', { book })
    }
  })
})


module.exports = router
