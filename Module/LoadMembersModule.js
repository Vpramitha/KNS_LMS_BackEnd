import db from '../db.js';

const LoadMembers = (callback) => {
    const query = "SELECT * FROM login";
    db.query(query, callback);
};

export { LoadMembers };