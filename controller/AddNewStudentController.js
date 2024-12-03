
import { AddNewStudentModal } from "../Module/AddNewStudentModal.js";

// Controller for handling add new student requests
const AddNewStudentController = (req, res) => {
  // Extracting required fields from the request body
  const { AdminId, StudentId, Email, StudentName, Grade, DOB, ContactNumber, Address, Class } = req.body;
  
  // Log the request details for debugging purposes
  console.log(AdminId + " AdminId " + StudentId + " " + Email + " " + StudentName + " " + Grade + " " + DOB + " " + ContactNumber + " " + Address + " " + Class);

  // Callback function to handle the response from the AddNewStudentModal
  const callback = (error, result) => {
    if (error) {
      // Handle error case
      console.error("Error:", error);
      res.status(500).json({ message: "Error" }); // Respond with an error status and message
    } else {
      // Handle success case
      console.log("The student successfully registered:", result);
      res.status(200).json(result); // Respond with a success status and the result
    }
  };

  // Call the AddNewStudentModal with the extracted fields and callback
  AddNewStudentModal(
    AdminId, StudentId, Email, StudentName, Grade, DOB, ContactNumber, Address, Class, callback
  );
};

export default AddNewStudentController;

