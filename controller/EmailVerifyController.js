import { EmailVerifyModal } from "../Module/EmailVerifyModal.js";

const EmailVerifyModalController = (req, res) => {
  const {UserId,AdminId,Email} = req.body;

  const callback = (error, result) => {
    if (error) {
      // Handle error
      console.error("Error:", error);
      res.status(500).json({ message: "Error" });
    } else {
      // Student added successfully
      console.log("The user verified:", result);
      res.status(200).json(result);
    }
  };

  EmailVerifyModal(
    UserId,AdminId,Email, callback
  );
};

export default EmailVerifyModalController;
