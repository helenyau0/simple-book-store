const db = require('./config')

const readAll = () => {
  let query = `
    SELECT
      *
    FROM
     book
  `
  return db.any(query)
}

const readById = (id) => {
  let query = `
    SELECT
      *
    FROM book
    WHERE id = $1
  `
  return db.one(query, [id])
}

const create = (book) => {
  let query = `
    INSERT INTO
      book(title, author, genre, height, publisher)
    VALUES
      ($1, $2, $3, $4, $5)
    RETURNING
      *
  `
  return db.one(query, [book.title, book.author, book.genre, book.height, book.publisher])
}

const remove = (id) => {
  let query = `
    DELETE FROM
      book
    WHERE id = $1
  `
  return db.none(query, [id])
}

module.exports = {
   readAll,
   readById,
   create,
   remove
 }
