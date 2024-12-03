import db from '../db2.js';

// Function to update book details
const EditBook = (Title, Author, Publisher, Description, NumberOfPages, Price_Rs, NumberOfCopies, ISBN, CategoryId, callback) => {
    // Query to update book details in the bookprofile table
    const query = "UPDATE bookprofile SET Title = ?, Author = ?, Publisher = ?, Description = ?, NumberOfPages = ?, Price_Rs = ?, NumberOfCopies = ?, CategoryId = ? WHERE ISBN = ?;"

    // Execute the query to update book details
    db.query(query, [Title, Author, Publisher, Description, NumberOfPages, Price_Rs, NumberOfCopies, CategoryId, ISBN], (err, result) => {
        if (err) {
            // Handle error during the update operation
            console.error('Error executing query:', err);
            callback(err, null);
            return;
        }
        // Callback with the result of the update operation
        callback(null, result);
    });
};

export { EditBook };
