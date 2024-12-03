import { EditCopy } from "../Module/EditCopyModule.js"; 

// Controller for handling edit copy requests
const EditCopyController = (req, res) => {
    // Extracting required fields from the request body
    const { Resource_ID, Availability, Lending_Ability } = req.body;
        
    // Callback function to handle the response from the EditCopy function
    const callback = (error, results) => {
        if (error) {
            // Handle error case
            console.error("Error loading Categories:", error);
            res.status(200).json({ message: "Error Editing this copy" }); // Respond with a failure message
        } else {
            // Copy edited successfully
            console.log("The copy is edited successfully:", results);
            res.status(200).json(results); // Respond with the results
        }
    };

    // Call the EditCopy function with the extracted fields and callback
    EditCopy(Availability, Lending_Ability, Resource_ID, callback);
};

export default EditCopyController;
