import express from "express";

import AddNoticeController from '../controller/AddNoticeController.js';

const AddNoticeRoute =express.Router();

AddNoticeRoute.post("/addNotice",AddNoticeController)

export default AddNoticeRoute; 