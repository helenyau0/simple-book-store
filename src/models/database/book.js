const db = require('./db.js')

const readAll = (page) => {
  const offset = (page - 1) * 10
 return db.any('SELECT * FROM book ORDER BY title ASC LIMIT 9 OFFSET $1', [offset])
}

const create = (book) => {
  return db.oneOrNone('INSERT INTO book(title, author, genre, height, publisher) VALUES($1, $2, $3, $4, $5) RETURNING *', [book.title, book.author, book.genre, book.height, book.publisher])
}

const remove = (id, book) => {
  return db.none('DELETE FROM book WHERE id=$1', [id])
}

const get = (id) => {
  return db.one('SELECT * FROM book WHERE id=$1', [id])
}

const update = (id, book) => {
  return db.any('UPDATE book SET title=$1, author=$2, genre=$3, height=$4, publisher=$5 WHERE id=$6 RETURNING *', [book[0], book[1], book[2], book[3], book[4], id])
}

const search = (searchQuery) => {
  return db.many(`SELECT * FROM book WHERE lower(title) LIKE $1::text OR lower(author) LIKE $1::text or lower(genre) LIKE $1::text LIMIT 10`, [`${searchQuery.replace(/\s+/,'%')}%`])
}

module.exports = {
  readAll,
  create,
  remove,
  get,
  update,
  search
}
