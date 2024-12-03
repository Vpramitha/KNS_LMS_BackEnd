import { deleteNotice } from "../Module/EditNoticeModule.js";

// Controller for handling delete notice requests
const deleteNoticeController = (req, res) => {
  // Extracting the NoticeId from the request parameters
  const { NoticeId } = req.params;

  // Log the NoticeId for debugging purposes
  console.log(`Deleting notice with ID: ${NoticeId}`);

  // Callback function to handle the response from the deleteNotice function
  const callBack = (err, results) => {
    if (err) {
      // Handle error case
      console.error(err);
      res.status(500).json({ message: err.message }); // Respond with an error status and message
    } else {
      // Handle success case
      console.log(results);
      res.status(200).json({ message: "Deleted the notice" }); // Respond with a success status and message
    }
  };

  // Call the deleteNotice function with the extracted NoticeId and callback
  deleteNotice(NoticeId, callBack);
};

export default deleteNoticeController;
