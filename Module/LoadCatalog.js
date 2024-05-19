import db from '../db2.js';

const LoadCatalog = (callback) => {
    const query = "SELECT * FROM bookprofile";
    db.query(query, callback);
};

export { LoadCatalog };