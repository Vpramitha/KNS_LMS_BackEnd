import { deleteNotice } from "../Module/EditNoticeModule.js";

const deleteNoticeController = (req, res) => {
  const { NoticeId } = req.params;
  console.log(`Deleting notice with ID: ${NoticeId}`);

  const callBack = (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: err.message });
    } else {
      console.log(results);
      res.status(200).json({ message: "Deleted the notice" });
    }
  };

  deleteNotice(NoticeId, callBack);
};

export default deleteNoticeController;
