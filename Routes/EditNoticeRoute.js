import express from "express";
import EditNoticeController from '../controller/EditNoticeController.js';
import DeleteNoticeController from '../controller/DeleteNoticeController.js';

const EditNoticeRoute = express.Router();

EditNoticeRoute.post("/editNotice", EditNoticeController);
EditNoticeRoute.delete("/deleteNotice/:NoticeId", DeleteNoticeController);

export default EditNoticeRoute;
