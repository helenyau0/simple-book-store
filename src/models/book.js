const books = require('./database/book')

const getAllBooks = () => {
  return books.readAll()
}

const getOne = (id) => {
  return books.readById(id)
}

const add = (book) => {
  return books.create(book)
}

const removeBook = (id) => {
  return books.remove(id)
}


module.exports = {
  getAllBooks,
  getOne,
  removeBook,
  add
}
