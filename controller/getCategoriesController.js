import { getCategories } from "../Module/getCategories.js"; 

// Controller for handling the loading of the catalog
const LoadCatalogController = (req, res) => {
    
    // Callback function to handle the response from the getCategories function
    const callback = (error, results) => {
        if (error) {
            // Handle error case
            console.error("Error loading Categories:", error);
            res.status(200).json({ message: "Error loading Categories" }); // Respond with a failure message
        } else {
            // Categories loaded successfully
            console.log("Load Categories successfully:", results);
            res.status(200).json(results); // Respond with the results
        }
    };

    // Call the getCategories function with the callback
    getCategories(callback);
};

export default LoadCatalogController;
