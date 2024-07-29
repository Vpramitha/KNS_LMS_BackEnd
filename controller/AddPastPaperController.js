import { AddPastPaperModal } from "../Module/AddPastPaperModule.js";

const AddPastPaperController = (req, res) => {
  const {year,term,grade,subject,title,fileUrl} = req.body;
  

  const callback = (error, result) => {
    if (error) {
      // Handle error
      console.error("Error:", error);
      res.status(500).json({ message: "Error" });
    } else {
      // Notice added successfully
      console.log("The Paper added successfully", result);
      res.status(200).json(result);
    }
  };

  AddPastPaperModal(
    year,term,grade,subject,title,fileUrl, callback
  );
};  

export default AddPastPaperController;