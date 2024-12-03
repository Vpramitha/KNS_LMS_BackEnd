import { GetLateReturnsModule } from "../Module/GetLateReturnsModule.js"; 

// Controller for handling the retrieval of late returns
const GetLateReturnsController = (req, res) => {
    
    // Callback function to handle the response from the GetLateReturnsModule function
    const callback = (error, results) => {
        if (error) {
            // Handle error case
            console.error("Error loading Late returns:", error);
            res.status(200).json({ message: "Error loading Late returns" }); // Respond with a failure message
        } else {
            // Late returns loaded successfully
            console.log("Load Late returns successfully:", results);
            res.status(200).json(results); // Respond with the results
        }
    };

    // Get the current date
    const currentDate = new Date();

    // Call the GetLateReturnsModule function with the current date and callback
    GetLateReturnsModule(currentDate, callback);
};

export default GetLateReturnsController;
