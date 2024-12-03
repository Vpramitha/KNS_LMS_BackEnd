import db from '../db2.js';

// Function to load and return the catalog of books along with their categories
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

    // Execute the query to retrieve book profiles with their corresponding category names
    db.query(query, callback);
};

export { LoadCatalog };
