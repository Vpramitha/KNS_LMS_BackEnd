import { AddTransactionModal } from "../Module/AddTransactionModule.js";

// Controller for handling add transaction requests
const AddTransactionController = (req, res) => {
  // Extracting required fields from the request body
  const { adminId, userId, resourceId, issueDate, dueDate } = req.body;
  
  // Log the request details for debugging purposes
  console.log(adminId, userId, resourceId, issueDate, dueDate);

  // Callback function to handle the response from the AddTransactionModal
  const callback = (error, result) => {
    if (error) {
      // Handle error case
      console.error("Error:", error);
      res.status(500).json({ message: "Error processing transaction" }); // Respond with an error status and message
    } else {
      // Transaction added successfully
      console.log("Transaction successfully processed:", result);
      res.status(200).json({ message: "Transaction successful", data: result }); // Respond with a success status and the result
    }
  };

  // Call the AddTransactionModal with the extracted fields and callback
  AddTransactionModal(adminId, userId, resourceId, issueDate, dueDate, callback);
};

export default AddTransactionController;
