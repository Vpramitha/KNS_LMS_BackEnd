const logoutController=(req,res)=>{
if (!(req.cookies.user_id||req.cookies.user_name)) {
   res.json({"message":"you didn't log in to the system"}); 
  }
  else{
    res.clearCookie('user_id');
    res.clearCookie('user_name');
    res.status(200).json({ message: 'Logged out successfully' });
  }
}


export default logoutController; 