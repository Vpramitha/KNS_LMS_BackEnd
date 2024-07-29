import { AddNoticeModal } from "../Module/AddNoticeModule.js";

const AddNoticeController = (req, res) => {
  const {subject,notice} = req.body;
  console.log(subject+"     "+notice);

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

  AddNoticeModal(
    subject,notice, callback
  );
};  

export default AddNoticeController;
