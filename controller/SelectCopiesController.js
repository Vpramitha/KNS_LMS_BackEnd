
import { selectCopies } from "../Module/SelectCopiesModule.js"; 

const selectCopiesController = (req, res) => {
    const {ISBN} = req.body;
    console.log(ISBN+"the request");

    
    const callback = (error, result) => {
    if (error) {
        // Handle error
        console.error("Error Getting copies book:", error);
        res.status(200).json({ message: "Getting copies was failed" });
    } else {
        // Book added successfully
        console.log("getting copies is success:", result);
        res.status(200).json(result);
    }

};

selectCopies(ISBN,callback);
};

export default selectCopiesController;