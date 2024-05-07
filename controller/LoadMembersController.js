
import { LoadMembers } from "../Module/LoadMembersModule.js"; 

const LoadMembersController = (req, res) => {    
    
    const callback = (error, result) => {
    if (error) {
        // Handle error
        console.error("Error Load Members :", error);
        res.status(200).json({ message: "Error loading Members" });
    } else {
        // load catalog successfully
        console.log("Load Members successfully:", result);
        res.status(200).json(result);
    }

};

LoadMembers(callback);

};

export default LoadMembersController;