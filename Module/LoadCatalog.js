import db from '../db.js';

const LoadCatalog = (callback) => {
    const query = "SELECT * FROM book";
    db.query(query, callback);
};

export { LoadCatalog };