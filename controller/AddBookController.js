
import { addBook } from "../Module/AddBookModule.js"; 

const AddBookController = (req, res) => {
    const { Title, Author, Price } = req.body;
    console.log(Title,Author,Price+"the request")

    
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

addBook(Title, Author, Price,callback);

};

export default AddBookController;