import { login,getAdminId } from "../Module/loginModel.js";

const loginController=(req,res)=>{
  const { UserName, Password } = req.body;

  const callBack1=(err, results) => {
  if (err) {
    res.json({"message":{err}});
    return;
  }else if(results.length===0||results.length>1){
     res.json( {"message":"you can not log in to the system"});
     console.log(results);
  }
  else{
    console.log(results);
    if(results[0].UserType === "Admin"){
       getAdminId(UserName,Password,callBack2)
       return;
    }else{
    res.json({"message":"you can log in to the system","UserId":results[0].UserId,"FullName":results[0].FullName,"UserType":results[0].UserType,"Gender":results[0].Gender,"DOB":results[0].DOB,"Address":results[0].Address,"ContactNumber":results[0].ContactNumber,"Email":results[0].Email});
  }
  }
}

const callBack2=(err, results) => {
  if (err) {
    res.json({"message":{err}});
    return;
  }else if(results.length===0||results.length>1){
     res.json( {"message":"you can not log in to the system"});
     console.log(results);
  }
  else{
    console.log(results);
    
       res.json({"message":"you can log in to the system","UserId":results[0].UserId,"FullName":results[0].FullName,"UserType":results[0].UserType,"Gender":results[0].Gender,"DOB":results[0].DOB,"Address":results[0].Address,"ContactNumber":results[0].ContactNumber,"Email":results[0].Email,"AdminId":results[0].AdminId});
    
  }
}

  login(UserName,Password,callBack1);
}
  

export default loginController;
