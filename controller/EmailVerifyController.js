import { EmailVerifyModal } from "../Module/EmailVerifyModal.js";

// Controller for handling email verification requests
const EmailVerifyModalController = (req, res) => {
  // Extracting required fields from the request body
  const { UserId, AdminId, Email } = req.body;

  // Log the request details for debugging purposes
  console.log("######################################################################");
  console.log("user Id is " + UserId);
  console.log("Admin Id is " + AdminId);
  console.log("Email is " + Email);
  console.log("######################################################################");

  // Callback function to handle the response from the EmailVerifyModal
  const callback = (error, result) => {
    if (error) {
      // Handle error case
      console.error("Error:", error);
      res.status(500).json({ message: "Error" }); // Respond with an error status and message
    } else {
      // User verified successfully
      console.log("The user verified:", result);
      res.status(200).json(result); // Respond with a success status and the result
    }
  };

  // Call the EmailVerifyModal with the extracted fields and callback
  EmailVerifyModal(UserId, AdminId, Email, callback);
};

export default EmailVerifyModalController;
