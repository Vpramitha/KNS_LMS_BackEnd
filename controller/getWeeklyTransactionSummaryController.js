import { getWeeklyTransactionSummary } from "../Module/getWeeklyTransactionSummaryModule.js";

const getWeeklyTransactionSummaryController = (req, res) => {
  

  const callback = (error, result) => {
    if (error) {
      // Handle error
      console.error("Error:", error);
      res.status(500).json({ message: "Error" });
    } else {
      // week report successfully
      console.log("The week report loaded successfully", result);
      res.status(200).json(result);
    }
  };

  getWeeklyTransactionSummary(
    callback
  );
};  

export default getWeeklyTransactionSummaryController;