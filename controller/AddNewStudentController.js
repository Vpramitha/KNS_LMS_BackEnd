import { AddNewStudentModal } from "../Module/AddNewStudentModal.js";

const AddNewStudentController = (req, res) => {
  const {    UserId, Password, Email, StudentId, StudentName, Grade, DOB, ContactNumber, Address} = req.body;

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

  AddNewStudentModal(
    UserId, Password, Email, StudentId, StudentName, Grade, DOB, ContactNumber, Address,
    callback
  );
};

export default AddNewStudentController;
