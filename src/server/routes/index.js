const router = require('express').Router()
const books = require('./book')

router.get('/', (request, reponse) => {
  reponse.redirect('/books')
})

router.use('/books', books)

module.exports = router
