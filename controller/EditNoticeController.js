import { editNotice } from "../Module/EditNoticeModule.js";

const editNoticeController=(req,res)=>{
  const { NoticeId,Title,Description } = req.body;
  console.log(NoticeId+Title+Description);

  const callBack = (err, results) => {
  if (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  } else {
    console.log(results);
    res.status(200).json({ message: "Updated the notice" });
  }
};


  editNotice(Title,Description,NoticeId, callBack);
}
  

export default editNoticeController;