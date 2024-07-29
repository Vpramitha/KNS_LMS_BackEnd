import { ShortReportModal } from "../Module/ShortReportModule.js";

const ShortReportController = (req, res) => {
  
  const callback = (error, result) => {
    if (error) {
      // Handle error
      console.error("Error:", error);
      res.status(500).json({ message: "Error" });
    } else {
      // Notice added successfully
      console.log("The Notice added successfully", result);
      res.status(200).json(result);
    }
  };
  ShortReportModal(
    callback
  );
};  

export default ShortReportController;
