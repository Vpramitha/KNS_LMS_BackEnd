import db from '../db2.js';

// Function to add a new book entry to the book profile table
const addBook = (ISBN, Title, Author, Publisher, CategoryId, Description, NumberOfPages, Price_Rs, NumberOfCopies, callback) => {
    // Query to insert a new book into the bookprofile table
    const query = "INSERT INTO bookprofile (ISBN, Title, Author, Publisher, CategoryId, Description, NumberOfPages, Price_Rs, NumberOfCopies) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    // Execute the query with the provided parameters
    db.query(query, [ISBN, Title, Author, Publisher, CategoryId, Description, NumberOfPages, Price_Rs, NumberOfCopies], callback);
};

// Function to add copies of a book to the resources table
const addCopies = (ISBN, NumberOfCopies) => {
    // Loop through the number of copies to add each copy to the resources table
    for (let i = 0; i < NumberOfCopies; i++) {
        // Query to insert a new copy of the book into the resources table
        const query2 = "INSERT INTO resources (ISBN, CopyNumber) VALUES (?, ?)";
        
        // Execute the query with the provided ISBN and copy number
        db.query(query2, [ISBN, (i + 1)], (error, result) => {
            if (error) {
                // Log error if there is an issue with the query
                console.log(error);
            } else {
                // Log result if the copy was added successfully
                console.log(result);
            }
        });
    }
};

export { addBook, addCopies };
