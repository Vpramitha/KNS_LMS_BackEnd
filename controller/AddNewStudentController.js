import { AddNewStudentModal } from "../Module/AddNewStudentModal.js";

const AddNewStudentController = (req, res) => {
  const {StudentId,Email, StudentName, Grade, DOB, ContactNumber, Address,Class} = req.body;

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
    StudentId,Email, StudentName, Grade, DOB, ContactNumber, Address,Class, callback
  );
};

export default AddNewStudentController;
