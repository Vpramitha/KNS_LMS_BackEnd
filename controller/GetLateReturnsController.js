
import { GetLateReturnsModule } from "../Module/GetLateReturnsModule.js"; 

const GetLateReturnsController = (req, res) => {
        
    const callback = (error, results) => {
    if (error) {
        // Handle error
        console.error("Error loading Late returns:", error);
        res.status(200).json({ message: "Error loading Late returns" });
    } else {
        // load catalog successfully
        console.log("Load Late returns successfully:", results);
        res.status(200).json(results);
    }
};

const currentDate = new Date();

GetLateReturnsModule(currentDate,callback);

};

export default GetLateReturnsController;