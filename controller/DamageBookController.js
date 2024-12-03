import { DamageBookModal } from "../Module/DamageBookModule.js";

// Controller for handling damage book requests
const DamageBookController = (req, res) => {
  // Extracting required fields from the request body
  const { ResourceId, Damage, AdminId, Date } = req.body;

  // Log the ResourceId for debugging purposes
  console.log(ResourceId);

  // Callback function to handle the response from the DamageBookModal
  const callback = (error, result) => {
    if (error) {
      // Handle error case
      console.error("Error:", error);
      res.status(500).json({ message: "Error" }); // Respond with an error status and message
    } else {
      // Damage reported successfully
      console.log(result);
      res.status(200).json(result); // Respond with a success status and the result
    }
  };

  // Call the DamageBookModal with the extracted fields and callback
  DamageBookModal(ResourceId, Damage, AdminId, Date, callback);
};  

export default DamageBookController;
