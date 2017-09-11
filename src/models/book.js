const book = require('./database/book.js')

module.exports = {
  getAll: book.readAll,
  create: book.create,
  remove: book.remove,
  get: book.get,
  update: book.update,
  search: book.search
}
