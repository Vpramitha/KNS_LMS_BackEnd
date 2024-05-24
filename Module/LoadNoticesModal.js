import db from '../db2.js';

const LoadNoticesModal = (callback) => {
    const query = "SELECT * FROM notices";
    db.query(query, callback);
};

export { LoadNoticesModal};