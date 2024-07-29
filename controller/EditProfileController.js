import { editProfile } from "../Module/EditProfile.js";

const editProfileController=(req,res)=>{
  const { FullName, Gender, DOB, Address, Email, ContactNumber,UserId } = req.body;

  const callBack = (err, results) => {
  if (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  } else {
    console.log(results);
    res.status(200).json({ message: "Updated your profile" });
  }
};


  editProfile(FullName, Gender, DOB, Address, Email, ContactNumber,UserId, callBack);
}
  

export default editProfileController;