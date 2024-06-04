
import { addBook,addCopies } from "../Module/AddBookModule.js"; 

const AddBookController = (req, res) => {
    const { ISBN, Title, Author,Publisher,CategoryId,Description,NumberOfPages,Price,NumberOfCopies } = req.body;
    console.log(ISBN, Title, Author,Publisher,CategoryId,Description,NumberOfPages,Price+NumberOfCopies+"the request");

    
    const callback = (error, result) => {
    if (error) {
        // Handle error
        console.error("Error adding book:", error);
        res.status(200).json({ message: "Book added fail" });
    } else {
        // Book added successfully
        console.log("Book added successfully:", result);
        res.status(200).json({ message: "Book added successfully" });
    }

};

addBook(ISBN, Title, Author,Publisher,CategoryId,Description,NumberOfPages,Price,NumberOfCopies,callback);
addCopies(ISBN,NumberOfCopies);

};

export default AddBookController; 