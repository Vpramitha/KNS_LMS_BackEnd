
import { LoadNoticesModal } from "../Module/LoadNoticesModal.js"; 

const LoadNoticesController = (req, res) => {
        
    const callback = (error, results) => {
    if (error) {
        // Handle error
        console.error("Error loading Notices:", error);
        res.status(200).json({ message: "Error loading Notices" });
    } else {
        // load catalog successfully
        console.log("Load Notices successfully:", results);
        res.status(200).json(results);
    }
};

LoadNoticesModal(callback);

};

export default LoadNoticesController;