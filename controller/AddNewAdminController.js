
import { AddNewAdminModal } from "../Module/AddNewAdminModule.js";

// Controller for handling add new admin requests
const AddNewAdminController = (req, res) => {
  // Extracting required fields from the request body
  const { AdminIdVerify, AdminId, Email, FullName, NIC, DOB, ContactNumber, Address } = req.body;
  
  // Log the AdminId for debugging purposes
  console.log(AdminId);

  // Callback function to handle the response from the AddNewAdminModal
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

  // Call the AddNewAdminModal with the extracted fields and callback
  AddNewAdminModal(
    AdminIdVerify, AdminId, Email, FullName, DOB, ContactNumber, Address, NIC, callback
  );
};

export default AddNewAdminController;

