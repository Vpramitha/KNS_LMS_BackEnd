// db.js

import db from '../db.js';

const addBook = (Title, Author, Price, callback) => {
    const query = "INSERT INTO book (Title, Author, Price) VALUES (?, ?, ?)";
    db.query(query, [Title, Author, Price], callback);
};

export { addBook };
