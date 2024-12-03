import { editNotice } from "../Module/EditNoticeModule.js";

// Controller for handling edit notice requests
const editNoticeController = (req, res) => {
  // Extracting required fields from the request body
  const { NoticeId, Title, Description } = req.body;
  
  // Log the request details for debugging purposes
  console.log(NoticeId + Title + Description);

  // Callback function to handle the response from the editNotice function
  const callBack = (err, results) => {
    if (err) {
      // Handle error case
      console.error(err);
      res.status(500).json({ message: err.message }); // Respond with an error status and message
    } else {
      // Notice edited successfully
      console.log(results);
      res.status(200).json({ message: "Updated the notice" }); // Respond with a success message
    }
  };

  // Call the editNotice function with the extracted fields and callback
  editNotice(Title, Description, NoticeId, callBack);
};

export default editNoticeController;
