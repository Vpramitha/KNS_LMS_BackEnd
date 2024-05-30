import { LoadAdminsModal } from "../Module/LoadAdminsModule.js"; 

const LoadAdminsController = (req, res) => {
    
    const callback = (error, result) => {
    if (error) {
        // Handle error
        console.error("Error Loading students:", error);
        res.status(200).json({ message: "Error Loading students" });
    } else {
        // Book added successfully
        console.log("Loading students successfully:", result);
        res.status(200).json( result);
    }

};  

LoadAdminsModal(callback);

};

export default LoadAdminsController;