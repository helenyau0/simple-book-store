const books = require('./database/book')

module.exports = {
  getAllBooks: books.readAll,
  getOne: books.readById,
  add:books.create,
  removeBook: books.remove,
  update: books.update,
  search: books.searchFor
}
