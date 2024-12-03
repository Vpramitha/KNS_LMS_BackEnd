import { LoadTeachersModal } from "../Module/LoadTeachersModal.js"; 

// Controller for handling the retrieval of teachers
const LoadTeachersController = (req, res) => {
    
    // Callback function to handle the response from the LoadTeachersModal function
    const callback = (error, result) => {
        if (error) {
            // Handle error case
            console.error("Error Loading teachers:", error);
            res.status(200).json({ message: "Error Loading teachers" }); // Respond with a failure message
        } else {
            // Teachers loaded successfully
            console.log("Loading teachers successfully:", result);
            res.status(200).json(result); // Respond with the results
        }
    };  

    // Call the LoadTeachersModal function with the callback
    LoadTeachersModal(callback);
};

export default LoadTeachersController;
