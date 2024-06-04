import { AccountRegisterModal } from "../Module/AccountRegisterModule.js";

const AccountRegisterController = (req, res) => {
  const {temporaryId, key, username,password} = req.body;

  const callback = (error, result) => {
    if (error) {
      // Handle error
      console.error("Error:", error);
      res.status(500).json({ message: "Error" });
    } else {
      // Student added successfully
      console.log("The user verified.Check again the Email that we gave.", result);
      res.status(200).json(result);
    }
  };

  AccountRegisterModal(
    temporaryId, key, username,password, callback
  );
};

export default AccountRegisterController;
