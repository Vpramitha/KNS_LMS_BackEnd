import { OutStandingListModal } from "../Module/OutStandingTransactionListModal.js";

// Controller for handling the reporting of lost books
const OutStandingListController = (req, res) => {
  const { UserId } = req.body;
  console.log(UserId);

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
  OutStandingListModal(UserId, callback);
};  

export default OutStandingListController;
