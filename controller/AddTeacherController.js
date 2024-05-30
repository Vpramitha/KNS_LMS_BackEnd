import { AddNewTeacherModal } from "../Module/AddTeacherModule.js";

const AddNewTeacherController = (req, res) => {
  const {TeacherId,Email, TeacherName, NIC, DOB,Gender, ContactNumber, Address} = req.body;

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

  AddNewTeacherModal(
    TeacherId,Email, TeacherName, NIC, DOB,Gender, ContactNumber, Address, callback
  );
};

export default AddNewTeacherController;
