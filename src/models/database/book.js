const db = require('./db.js')

const readAll = () => {
 return db.any('SELECT * FROM book')
}

const create = (book) => {
  return db.oneOrNone('INSERT INTO book(title, author, genre, height, publisher) VALUES($1, $2, $3, $4, $5) RETURNING *', [book.title, book.author, book.genre, book.height, book.publisher])
}


const deleteBook = (id) => {
  return db.none('DELETE FROM book WHERE id=$1', [id])
}

const get = (id) => {
  return db.one('SELECT * FROM book WHERE id=$1', [id])
}

module.exports = {
  readAll,
  create,
  deleteBook,
  get
}
