import { AddTransactionModal } from "../Module/AddTransactionModule.js";

const AddTransactionController = (req, res) => {
  const { adminId, userId, resourceId, issueDate, returnDate } = req.body;
  console.log(adminId, userId, resourceId, issueDate, returnDate);

  const callback = (error, result) => {
    if (error) {
      // Handle error
      console.error("Error:", error);
      res.status(500).json({ message: "Error processing transaction" });
    } else {
      // Transaction added successfully
      console.log("Transaction successfully processed:", result);
      res.status(200).json({ message: "Transaction successful", data: result });
    }
  };

  AddTransactionModal(adminId, userId, resourceId, issueDate, returnDate, callback);
};

export default AddTransactionController;
