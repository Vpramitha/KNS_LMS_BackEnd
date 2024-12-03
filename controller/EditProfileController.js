import { editProfile } from "../Module/EditProfile.js";

// Controller for handling edit profile requests
const editProfileController = (req, res) => {
  // Extracting required fields from the request body
  const { FullName, Gender, DOB, Address, Email, ContactNumber, UserId } = req.body;

  // Callback function to handle the response from the editProfile function
  const callBack = (err, results) => {
    if (err) {
      // Handle error case
      console.error(err);
      res.status(500).json({ message: err.message }); // Respond with an error status and message
    } else {
      // Profile edited successfully
      console.log(results);
      res.status(200).json({ message: "Updated your profile" }); // Respond with a success message
    }
  };

  // Call the editProfile function with the extracted fields and callback
  editProfile(FullName, Gender, DOB, Address, Email, ContactNumber, UserId, callBack);
};

export default editProfileController;
