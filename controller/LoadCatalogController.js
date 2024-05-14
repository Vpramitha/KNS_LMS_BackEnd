
import { LoadCatalog } from "../Module/LoadCatalog.js"; 

const LoadCatalogController = (req, res) => {
        
    const callback = (error, results) => {
    if (error) {
        // Handle error
        console.error("Error loading catalog:", error);
        res.status(200).json({ message: "Error loading catalog" });
    } else {
        // load catalog successfully
        console.log("Load catalog successfully:", results);
        res.status(200).json(results);

    }
};

LoadCatalog(callback);

};

export default LoadCatalogController;