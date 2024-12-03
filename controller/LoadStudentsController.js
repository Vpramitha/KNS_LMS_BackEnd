import { LoadStudentsModal } from "../Module/LoadStudentsModal.js"; 

// Controller for handling the retrieval of students
const LoadStudentsController = (req, res) => {
    
    // Callback function to handle the response from the LoadStudentsModal function
    const callback = (error, result) => {
        if (error) {
            // Handle error case
            console.error("Error Loading students:", error);
            res.status(200).json({ message: "Error Loading students" }); // Respond with a failure message
        } else {
            // Students loaded successfully
            console.log("Loading students successfully:", result);
            res.status(200).json(result); // Respond with the results
        }
    };  

    // Call the LoadStudentsModal function with the callback
    LoadStudentsModal(callback);
};

export default LoadStudentsController;
