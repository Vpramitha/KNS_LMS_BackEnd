import { addMember } from "../Module/AddMemberModule.js";

const AddMemberController=(req,res)=>{
  const { UserName, Password } = req.body;

  const callBack=(err, results) => {
  if (err) {
    res.json({"message":{err}});
    return;}
  else{
    res.json({"message":"you are registered to the system"});
  }
}

  addMember(UserName,Password,callBack);
}
  
export default AddMemberController;