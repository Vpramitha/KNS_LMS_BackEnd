
import { getCategories } from "../Module/getCategories.js"; 

const LoadCatalogController = (req, res) => {
        
    const callback = (error, results) => {
    if (error) {
        // Handle error
        console.error("Error loading Categories:", error);
        res.status(200).json({ message: "Error loading Categories" });
    } else {
        // load catalog successfully
        console.log("Load Categories successfully:", results);
        res.status(200).json(results);
    }
};

getCategories(callback);

};

export default LoadCatalogController;