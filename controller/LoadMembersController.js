import { LoadMembers } from "../Module/LoadMembersModule.js"; 

// Controller for handling the retrieval of members
const LoadMembersController = (req, res) => {    
    
    // Callback function to handle the response from the LoadMembers function
    const callback = (error, results) => {
        if (error) {
            // Handle error case
            console.error("Error Load Members :", error);
            res.status(200).json({ message: "Error loading Members" }); // Respond with a failure message
        } else {
            // Members loaded successfully
            console.log("Load Members successfully:", results);
            res.status(200).json(results); // Respond with the results
        }
    }; 

    // Call the LoadMembers function with the callback
    LoadMembers(callback); 
};

export default LoadMembersController;
