COPY book(title,author,genre,height, publisher)
FROM '/Users/helen/Desktop/LGfolder/simple-book-store/src/models/database/books.csv' DELIMITER ',' CSV HEADER;
