import { EditBook } from "../Module/EditBookModule.js"; 

// Controller for handling edit book requests
const EditBookController = (req, res) => {
    // Extracting required fields from the request body
    const { Title, Author, Publisher, CategoryId, Description, NumberOfPages, Price_Rs, NumberOfCopies, ISBN } = req.body;
    
    // Log the request details for debugging purposes
    console.log(Title, Author, Publisher, Description, NumberOfPages, Price_Rs + NumberOfCopies + ISBN + " the request " + CategoryId);
    console.log("................................ISBN : " + ISBN);

    // Callback function to handle the response from the EditBook function
    const callback = (error, result) => {
        if (error) {
            // Handle error case
            console.error("Error adding book:", error);
            res.status(200).json({ message: "Book added fail" }); // Respond with a failure message
        } else {
            // Book edited successfully
            console.log("Book Edited successfully:", result);
            res.status(200).json({ message: "Book Edited successfully" }); // Respond with a success message
        }
    };

    // Call the EditBook function with the extracted fields and callback
    EditBook(Title, Author, Publisher, Description, NumberOfPages, Price_Rs, NumberOfCopies, ISBN, CategoryId, callback);
};

export default EditBookController;
