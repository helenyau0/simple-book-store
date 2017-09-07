DROP TABLE IF EXISTS book;

CREATE TABLE book (
  id SERIAL PRIMARY KEY,
  title VARCHAR(250),
  author VARCHAR(250),
  genre VARCHAR(250),
  height INTEGER,
  publisher VARCHAR(250)
);
