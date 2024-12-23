import { LostBookModal } from "../Module/LostBookModule.js";

// Controller for handling the reporting of lost books
const LostBookController = (req, res) => {
  const { ResourceId, AdminId, Reason, Date, TransactionId } = req.body;
  console.log(ResourceId);

  // Callback function to handle the response from the LostBookModal function
  const callback = (error, result) => {
    if (error) {
      // Handle error
      console.error("Error:", error);
      res.status(500).json({ message: "Error" }); // Respond with a failure message
    } else {
      // Lost book reported successfully
      console.log(result);
      res.status(200).json(result); // Respond with the results
    }
  };

  // Call the LostBookModal function with the callback
  LostBookModal(
    ResourceId, AdminId, Reason, Date, TransactionId, callback
  );
};  

export default LostBookController;
