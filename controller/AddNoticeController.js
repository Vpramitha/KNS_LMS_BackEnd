import { AddNoticeModal } from "../Module/AddNoticeModule.js";

// Controller for handling add notice requests
const AddNoticeController = (req, res) => {
  // Extracting required fields from the request body
  const { subject, notice } = req.body;
  
  // Log the request details for debugging purposes
  console.log(subject + " " + notice);

  // Callback function to handle the response from the AddNoticeModal
  const callback = (error, result) => {
    if (error) {
      // Handle error case
      console.error("Error:", error);
      res.status(500).json({ message: "Error" }); // Respond with an error status and message
    } else {
      // Handle success case
      console.log("The Notice added successfully", result);
      res.status(200).json(result); // Respond with a success status and the result
    }
  };

  // Call the AddNoticeModal with the extracted fields and callback
  AddNoticeModal(subject, notice, callback);
};  

export default AddNoticeController;
