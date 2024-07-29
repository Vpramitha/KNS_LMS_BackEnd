import express from "express";

import AddPastPaperController from '../controller/AddPastPaperController.js';

const AddPastPaperRoute =express.Router();

AddPastPaperRoute.post("/addPastPaper",AddPastPaperController)

export default AddPastPaperRoute;