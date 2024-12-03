import { LoadCatalog } from "../Module/LoadCatalog.js"; 

// Controller for handling the loading of the catalog
const LoadCatalogController = (req, res) => {
    
    // Callback function to handle the response from the LoadCatalog function
    const callback = (error, results) => {
        if (error) {
            // Handle error case
            console.error("Error loading catalog:", error);
            res.status(200).json({ message: "Error loading catalog" }); // Respond with a failure message
        } else {
            // Catalog loaded successfully
            console.log("Load catalog successfully:", results);
            res.status(200).json(results); // Respond with the results
        }
    };

    // Call the LoadCatalog function with the callback
    LoadCatalog(callback);
};

export default LoadCatalogController;
