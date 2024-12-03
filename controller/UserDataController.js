/*const userDataController=(req,res)=>{
  
  if (!(req.cookies.user_id||req.cookies.user_name)) {
   res.json({"message":"you should log in to the system first"}); 
  }
  else{
    const userData = {
    userId: req.cookies.user_id,
    username: req.cookies.user_name, // Example of other user data
    // Add other user data as needed
  };
  // Send user data in the API response
  res.json(userData);
  }
}
  

export default userDataController;*/