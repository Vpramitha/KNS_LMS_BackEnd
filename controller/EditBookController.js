
import { EditBook } from "../Module/EditBookModule.js"; 

const EditBookController = (req, res) => {
    const { Title, Author,Publisher,Description,NumberOfPages,Price,NumberOfCopies,ISBN } = req.body;
    console.log(Title, Author,Publisher,Description,NumberOfPages,Price+NumberOfCopies+ISBN+ "the request");
    console.log("................................ISBN : "+ISBN)

    const callback = (error, result) => {
    if (error) {
        // Handle error
        console.error("Error adding book:", error);
        res.status(200).json({ message: "Book added fail" });
    } else {
        // Book added successfully
        console.log("Book Edited successfully:", result);
        res.status(200).json({ message: "Book Edited successfully" });
    }

};

EditBook(Title, Author,Publisher,Description,NumberOfPages,Price,NumberOfCopies,ISBN,callback);


};

export default EditBookController;