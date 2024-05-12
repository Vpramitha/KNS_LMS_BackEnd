import { editProfile } from "../Module/EditProfile.js";

const editProfileController=(req,res)=>{
  const { Id,UserName, Password,Age } = req.body;

  const callBack=(err, results) => {
  if (err) {
    res.json({"message":{err}});
    return;
  }else{
    console.log(results);
    res.json({"message":"Updated your the profile"});
  }
}

  editProfile(Id,UserName,Password,Age,callBack);
}
  

export default editProfileController;