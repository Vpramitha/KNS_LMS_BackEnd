
import { addBook, addCopies } from "../Module/AddBookModule.js";

// Controller for handling add book requests
const AddBookController = (req, res) => {
    // Extracting required fields from the request body
    const { ISBN, Title, Author, Publisher, CategoryId, Description, NumberOfPages, Price, NumberOfCopies } = req.body;
    
    // Log the request details for debugging purposes
    console.log(ISBN, Title, Author, Publisher, CategoryId, Description, NumberOfPages, Price + NumberOfCopies + " the request");

    // Callback function to handle the response from the addBook function
    const callback = (error, result) => {
        if (error) {
            // Handle error case
            console.error("Error adding book:", error);
            res.status(200).json({ message: "Book added fail" }); // Respond with a failure message
        } else {
            // Handle success case
            console.log("Book added successfully:", result);
            res.status(200).json({ message: "Book added successfully" }); // Respond with a success message
        }
    };

    // Call the addBook function with the extracted fields and callback
    addBook(ISBN, Title, Author, Publisher, CategoryId, Description, NumberOfPages, Price, NumberOfCopies, callback);
    
    // Call the addCopies function to add copies of the book
    addCopies(ISBN, NumberOfCopies);
};

export default AddBookController;
