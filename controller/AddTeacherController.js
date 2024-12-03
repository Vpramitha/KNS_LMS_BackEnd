import { AddNewTeacherModal } from "../Module/AddTeacherModule.js";

// Controller for handling add new teacher requests
const AddNewTeacherController = (req, res) => {
  // Extracting required fields from the request body
  const { AdminId, TeacherId, Email, TeacherName, NIC, DOB, Gender, ContactNumber, Address } = req.body;

  // Callback function to handle the response from the AddNewTeacherModal
  const callback = (error, result) => {
    if (error) {
      // Handle error case
      console.error("Error:", error);
      res.status(500).json({ message: "Error" }); // Respond with an error status and message
    } else {
      // Teacher added successfully
      console.log("The teacher successfully registered:", result);
      res.status(200).json(result); // Respond with a success status and the result
    }
  };

  // Call the AddNewTeacherModal with the extracted fields and callback
  AddNewTeacherModal(
    AdminId, TeacherId, Email, TeacherName, NIC, DOB, Gender, ContactNumber, Address, callback
  );
};

export default AddNewTeacherController;
