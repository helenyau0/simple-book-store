const router = require('express').Router()
const book = require('../../models/book')

router.get('/', (request, response) => {
  book.getAllBooks()
    .then(books => {response.render('books', {books})})
})

router.get('/:id', (request, response) => {
  book.getOne(request.params.id)
    .then(book => {response.render('single-view', {book})})
})

router.post('/add', (request, response) => {
  book.add(request.body)
    .then(() => {response.redirect('/books')})
})

router.post('/delete/:id', (request, response) => {
  console.log(request.body);
  console.log(request.params);
  book.removeBook(request.params.id)
    .then(() => {response.redirect('/books')})
})

module.exports = router
