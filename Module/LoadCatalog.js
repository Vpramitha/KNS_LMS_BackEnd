import db from '../db2.js';

const LoadCatalog = (callback) => {
    const query = `SELECT 
    b.*, 
    c.CatagoryName
FROM 
    bookprofile b
JOIN 
    catagory c
ON 
    b.CategoryId = c.CatagoryId;
`;
    db.query(query, callback);
};

export { LoadCatalog };