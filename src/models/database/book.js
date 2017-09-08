const db = require('./config')

const readAll = (page) => {
  let query = `
    SELECT
      *
    FROM
     book
   ORDER BY
     title ASC
    LIMIT
      10
    OFFSET
      $1
  `
  let currentOffset = ( page - 1 ) * 10
  return db.any(query, [currentOffset])
}

const readById = (id) => {
  let query = `
    SELECT
      *
    FROM
      book
    WHERE
      id = $1
  `
  return db.one(query, [id])
}

const create = (book) => {
  let query = `
    INSERT INTO
      book(title, author, genre, pages, publisher)
    VALUES
      ($1, $2, $3, $4, $5)
    RETURNING
      *
  `
  return db.one(query, [book.title, book.author, book.genre, book.pages, book.publisher])
}

const remove = (id) => {
  let query = `
    DELETE FROM
      book
    WHERE
      id = $1
  `
  return db.none(query, [id])
}

const update = (id, book) => {
  let query = `
    UPDATE
      book
    SET
      title=$1,
      author=$2,
      genre=$3,
      pages=$4,
      publisher=$5
    WHERE id = $6
    RETURNING
      *
  `
  return db.any(query, [book[0], book[1], book[2], book[3], book[4], id])
}

const searchFor = (searched) => {
  let query = `
    SELECT
      *
    FROM
      book
    WHERE
      lower(title || ' ' || author || ' ' || genre) LIKE $1::text
    LIMIT 10
    `
  return db.any(query,[`%${searched.toString().toLowerCase().replace(/\s+/,'%')}%`])
}

module.exports = {
   readAll,
   readById,
   update,
   create,
   remove,
   searchFor
 }
