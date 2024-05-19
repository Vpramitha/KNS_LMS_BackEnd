
import { LoadMembers } from "../Module/LoadMembersModule.js"; 

const LoadMembersController = (req, res) => {    
    
    const callback = (error, results) => {
    if (error) {
        // Handle error
        console.error("Error Load Members :", error);
        res.status(200).json({ message: "Error loading Members" });
    } else {
        // load catalog successfully
        console.log("Load Members successfully:", results);
        res.status(200).json(results);
    }
    
}; 

LoadMembers(callback); 
   
};

export default LoadMembersController;