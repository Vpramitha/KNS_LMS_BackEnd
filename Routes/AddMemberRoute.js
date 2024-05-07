import express from "express";

import AddMemberController from '../controller/AddMemberController.js';

const AddMemberRoute =express.Router();

AddMemberRoute.post("/addMember",AddMemberController)

export default AddMemberRoute;
