//controller for login

import { login,getAdminId } from "../Module/loginModel.js"; //two functions from login modal

const loginController=(req,res)=>{

  const { UserName, Password } = req.body; //user name and password from request

  const userCallBack=(err, results) => {
  if (err) { //if return err from login function
    res.json({"message":{err}});
    return;
  }else if(results.length===0||results.length>1){ //if there no one record or if there is more than one record with given username and password
     res.json( {"message":"you can not log in to the system"});
     console.log(results);//for testing
  }
  else{
    console.log(results);
    if(results[0].UserType === "Admin"){ //if user is a admin
       getAdminId(UserName,Password,adminCallBack)
       return;
    }else{
    res.json({"message":"you can log in to the system","UserId":results[0].UserId,"FullName":results[0].FullName,"UserType":results[0].UserType,"Gender":results[0].Gender,"DOB":results[0].DOB,"Address":results[0].Address,"ContactNumber":results[0].ContactNumber,"Email":results[0].Email});
  }
  }
}

const adminCallBack=(err, results) => { //for admins only
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


  login(UserName,Password,userCallBack);
}
  

export default loginController;
