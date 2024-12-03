import { AddPastPaperModal } from "../Module/AddPastPaperModule.js";

// Controller for handling add past paper requests
const AddPastPaperController = (req, res) => {
  // Extracting required fields from the request body
  const { year, term, grade, subject, title, fileUrl } = req.body;

  // Callback function to handle the response from the AddPastPaperModal
  const callback = (error, result) => {
    if (error) {
      // Handle error case
      console.error("Error:", error);
      res.status(500).json({ message: "Error" }); // Respond with an error status and message
    } else {
      // Paper added successfully
      console.log("The Paper added successfully", result);
      res.status(200).json(result); // Respond with a success status and the result
    }
  };

  // Call the AddPastPaperModal with the extracted fields and callback
  AddPastPaperModal(year, term, grade, subject, title, fileUrl, callback);
};  

export default AddPastPaperController;
