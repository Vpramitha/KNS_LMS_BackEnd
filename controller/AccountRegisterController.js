
import { AccountRegisterModal } from "../Module/AccountRegisterModule.js";

// Controller for handling account registration requests
const AccountRegisterController = (req, res) => {
  // Extracting required fields from the request body
  const { temporaryId, key, username, password } = req.body;

  // Callback function to handle the response from the AccountRegisterModal
  const callback = (error, result) => {
    if (error) {
      // Handle error case
      console.error("Error:", error);
      res.status(500).json({ message: "Error" }); // Respond with an error status and message
    } else {
      // Handle success case
      console.log("The user verified. Check again the Email that we gave.", result);
      res.status(200).json(result); // Respond with a success status and the result
    }
  };

  // Call the AccountRegisterModal with the extracted fields and callback
  AccountRegisterModal(temporaryId, key, username, password, callback);
};

export default AccountRegisterController;
