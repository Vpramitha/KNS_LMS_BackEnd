
import { AddCopies } from "../Module/AddCopiesModule.js";

// Controller for handling add copies requests
const AddCopiesController = (req, res) => {
    // Extracting required fields from the request body
    const { ISBN, NumberOfCopies } = req.body;
    
    // Log the request details for debugging purposes
    console.log(ISBN, NumberOfCopies, "the request");

    // Callback function to handle the response from the AddCopies function
    const callback = (error) => {
        if (error) {
            // Handle error case
            console.error("Error adding copies:", error);
            res.status(500).json({ message: "Failed to add copies" }); // Respond with a failure message
        } else {
            // Handle success case
            console.log("Copies added successfully");
            res.status(200).json({ message: "Copies added successfully" }); // Respond with a success message
        }
    };

    // Call the AddCopies function with the extracted fields and callback
    AddCopies(NumberOfCopies, ISBN, callback);
};

export default AddCopiesController;

