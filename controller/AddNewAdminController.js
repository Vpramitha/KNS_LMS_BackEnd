import { AddNewAdminModal } from "../Module/AddNewAdminModule.js";

const AddNewAdminController = (req, res) => {
  const {AdminId,Email, FullName, NIC, DOB, ContactNumber, Address} = req.body;

  const callback = (error, result) => {
    if (error) {
      // Handle error
      console.error("Error:", error);
      res.status(500).json({ message: "Error" });
    } else {
      // Student added successfully
      console.log("The student successfully registered:", result);
      res.status(200).json(result);
    }
  };

  AddNewAdminModal(
    AdminId,Email, FullName,DOB, ContactNumber, Address,NIC, callback
  );
};

export default AddNewAdminController;
