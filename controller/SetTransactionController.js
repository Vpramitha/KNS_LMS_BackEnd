import { SetTransactionModal } from "../Module/SetTransactionModule.js";

// Controller for setting a new transaction
const SetTransactionController = (req, res) => {
  const { adminId, userId, resourceId, CurrentDate, DueDate } = req.body;
  console.log(adminId, userId, resourceId, CurrentDate, DueDate);

  // Callback function to handle the response from the SetTransactionModal function
  const callback = (error, result) => {
    if (error) {
      // Handle error
      console.error("Error:", error);
      res.status(500).json({ message: "Error processing transaction" }); // Respond with a failure message
    } else {
      // Transaction processed successfully
      console.log("Transaction successfully processed:", result);
      res.status(200).json(result); // Respond with the transaction result
    }
  };
 
  // Call the SetTransactionModal function with the callback
  SetTransactionModal(adminId, userId, resourceId, CurrentDate, DueDate, callback);
};

export default SetTransactionController;
