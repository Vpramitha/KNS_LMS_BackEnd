import { GenerateLastMonthUsage } from "../Module/GenerateLastMothUsage.js";

// Controller for handling the generation of last month's usage report
const GenerateLastMonthUsageController = (req, res) => {
  // Extracting required fields from the request body
  const { UserType, UserId, AdminId } = req.body;

  // Callback function to handle the response from the GenerateLastMonthUsage function
  const callback = (error, result) => {
    if (error) {
      // Handle error case
      console.error("Error:", error);
      res.status(500).json({ message: "Error" }); // Respond with an error status and message
    } else {
      // Report generated successfully
      console.log("The personal report loaded successfully", result);
      res.status(200).json(result); // Respond with a success status and the result
    }
  };

  // Call the GenerateLastMonthUsage function with the extracted fields and callback
  GenerateLastMonthUsage(UserType, UserId, AdminId, callback);
};

export default GenerateLastMonthUsageController;
