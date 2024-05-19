
import { EditCopy } from "../Module/EditCopyModule.js"; 

const EditCopyController = (req, res) => {

    const {Resource_ID,Availability,Lending_Ability} = req.body;
        
    const callback = (error, results) => {
    if (error) {
        // Handle error
        console.error("Error loading Categories:", error);
        res.status(200).json({ message: "Error Editing this copy" });
    } else {
        // load catalog successfully
        console.log("The copy is edited successfully:", results);
        res.status(200).json(results);
    }
};

EditCopy(Availability,Lending_Ability,Resource_ID,callback);

};

export default EditCopyController;