import { getWeeklyTransactionSummary } from "../Module/getWeeklyTransactionSummaryModule.js";

// Controller for handling the retrieval of the weekly transaction summary
const getWeeklyTransactionSummaryController = (req, res) => {

  // Callback function to handle the response from the getWeeklyTransactionSummary function
  const callback = (error, result) => {
    if (error) {
      // Handle error case
      console.error("Error:", error);
      res.status(500).json({ message: "Error" }); // Respond with an error status and message
    } else {
      // Weekly transaction summary loaded successfully
      console.log("The week report loaded successfully", result);
      res.status(200).json(result); // Respond with a success status and the result
    }
  };

  // Call the getWeeklyTransactionSummary function with the callback
  getWeeklyTransactionSummary(callback);
};

export default getWeeklyTransactionSummaryController;
