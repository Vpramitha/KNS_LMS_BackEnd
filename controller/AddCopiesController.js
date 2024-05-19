import { AddCopies } from "../Module/AddCopiesModule.js"; 

const AddCopiesController = (req, res) => {
    const { ISBN, NumberOfCopies } = req.body;
    console.log(ISBN, NumberOfCopies, "the request");

    const callback = (error) => {
        if (error) {
            // Handle error
            console.error("Error adding copies:", error);
            res.status(500).json({ message: "Failed to add copies" });
        } else {
            // Copies added successfully
            console.log("Copies added successfully");
            res.status(200).json({ message: "Copies added successfully" });
        }
    };

    AddCopies(NumberOfCopies, ISBN, callback);
};

export default AddCopiesController;
