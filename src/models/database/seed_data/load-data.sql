COPY book(title, author, genre, height, publisher)
FROM '/Users/jiggs/Documents/guildProjects/phase3/simple-book-store/src/models/database/seed_data/book-data.csv' DELIMITER ',' CSV HEADER;
