import { LoadAdminsModal } from "../Module/LoadAdminsModule.js"; 

// Controller for handling the loading of admin details
const LoadAdminsController = (req, res) => {
    
    // Callback function to handle the response from the LoadAdminsModal function
    const callback = (error, result) => {
        if (error) {
            // Handle error case
            console.error("Error Loading students:", error);
            res.status(200).json({ message: "Error Loading students" }); // Respond with a failure message
        } else {
            // Admins loaded successfully
            console.log("Loading students successfully:", result);
            res.status(200).json(result); // Respond with the result
        }
    };  

    // Call the LoadAdminsModal function with the callback
    LoadAdminsModal(callback);
};

export default LoadAdminsController;
