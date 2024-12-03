import { selectCopies } from "../Module/SelectCopiesModule.js"; 

// Controller for selecting book copies based on ISBN
const selectCopiesController = (req, res) => {
    const { ISBN } = req.body;
    console.log(ISBN + " the request");

    // Callback function to handle the response from the selectCopies function
    const callback = (error, result) => {
        if (error) {
            // Handle error
            console.error("Error Getting copies book:", error);
            res.status(200).json({ message: "Getting copies was failed" }); // Respond with a failure message
        } else {
            // Copies retrieved successfully
            console.log("Getting copies is success:", result);
            res.status(200).json(result); // Respond with the retrieved copies
        }
    };

    // Call the selectCopies function with the callback
    selectCopies(ISBN, callback);
};

export default selectCopiesController;
