import { LostBookModal } from "../Module/LostBookModule.js";

const LostBookController = (req, res) => {
  const {ResourceId,AdminId,Reason,Date,TransactionId} = req.body;
  console.log(ResourceId);

  const callback = (error, result) => {
    if (error) {
      // Handle error
      console.error("Error:", error);
      res.status(500).json({ message: "Error" });
    } else {
      // Notice added successfully
      console.log(result);
      res.status(200).json(result);
    }
  };

  LostBookModal(
    ResourceId, AdminId, Reason,Date,TransactionId,callback
  );
};  

export default LostBookController;
