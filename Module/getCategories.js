import db from '../db2.js';

const getCategories = (callback) => {
    const query = "SELECT catagoryId,catagoryName FROM catagory";
    db.query(query, callback);
};

export { getCategories};