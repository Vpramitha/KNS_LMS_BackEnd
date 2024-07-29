import { GenerateLastMonthUsage } from "../Module/GenerateLastMothUsage.js";

const GenerateLastMonthUsageController = (req, res) => {
  const {UserType,UserId,AdminId}=req.body;

  const callback = (error, result) => {
    if (error) {
      // Handle error
      console.error("Error:", error);
      res.status(500).json({ message: "Error" });
    } else {
      // week report successfully
      console.log("The personal report loaded successfully", result);
      res.status(200).json(result);
    }
  };

  GenerateLastMonthUsage(
    UserType,UserId,AdminId,callback
  );
};  

export default GenerateLastMonthUsageController; 