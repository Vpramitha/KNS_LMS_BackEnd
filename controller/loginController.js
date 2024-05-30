import { login } from "../Module/loginModel.js";

const loginController=(req,res)=>{
  const { UserName, Password } = req.body;

  const callBack=(err, results) => {
  if (err) {
    res.json({"message":{err}});
    return;
  }else if(results.length===0||results.length>1){
     res.json( {"message":"you can not log in to the system"});
     console.log(results);
  }
  else{
    console.log(results);
    res.json({"message":"you can log in to the system","FullName":results[0].FullName,"UserType":results[0].UserType,"Gender":results[0].Gender,"DOB":results[0].DOB,"Address":results[0].Address,"ContactNumber":results[0].ContactNumber,"Email":results[0].Email});
  }
}

  login(UserName,Password,callBack);
}
  

export default loginController;
