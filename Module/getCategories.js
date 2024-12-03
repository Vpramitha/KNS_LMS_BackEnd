import db from '../db2.js';

// Function to retrieve categories from the database
const getCategories = (callback) => {
    // SQL query to select category ID and name from the 'catagory' table
    const query = "SELECT catagoryId, catagoryName FROM catagory";
    
    // Execute the query and pass the result to the callback function
    db.query(query, callback);
};

export { getCategories };
