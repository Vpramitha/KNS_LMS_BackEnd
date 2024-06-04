import { SetTransactionModal } from "../Module/SetTransactionModule.js";

const SetTransactionController = (req, res) => {
  const { adminId, userId, resourceId, CurrentDate, DueDate } = req.body;
  console.log(adminId, userId, resourceId, CurrentDate, DueDate);

  const callback = (error, result) => {
    if (error) {
      // Handle error
      console.error("Error:", error);
      res.status(500).json({ message: "Error processing transaction" });
    } else {
      // Transaction added successfully
      console.log("Transaction successfully processed:", result);
      res.status(200).json( result );
    }
  };
 
  SetTransactionModal(adminId, userId, resourceId, CurrentDate, DueDate, callback);
};

export default SetTransactionController;
