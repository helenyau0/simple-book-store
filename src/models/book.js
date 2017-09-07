const book = require('./database/book.js')

module.exports = {
  getAll: book.readAll,
  add: book.create,
  remove: book.deleteBook,
  get: book.get
}
