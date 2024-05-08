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
    res.cookie('user_id', results[0].id, { httpOnly: true });
    res.cookie('user_name', results[0].Name, { httpOnly: true });
    res.json({"message":"you can log in to the system"});
  }
}

  login(UserName,Password,callBack);
}
  

export default loginController;