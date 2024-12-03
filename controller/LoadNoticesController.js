import { LoadNoticesModal } from "../Module/LoadNoticesModal.js"; 

// Controller for handling the retrieval of notices
const LoadNoticesController = (req, res) => {
    
    // Callback function to handle the response from the LoadNoticesModal function
    const callback = (error, results) => {
        if (error) {
            // Handle error case
            console.error("Error loading Notices:", error);
            res.status(200).json({ message: "Error loading Notices" }); // Respond with a failure message
        } else {
            // Notices loaded successfully
            console.log("Load Notices successfully:", results);
            res.status(200).json(results); // Respond with the results
        }
    };

    // Call the LoadNoticesModal function with the callback
    LoadNoticesModal(callback);
};

export default LoadNoticesController;
