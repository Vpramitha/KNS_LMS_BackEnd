import express from "express";

import AddNewAdminController from '../controller/AddNewAdminController.js';

const AddNewAdminRoute =express.Router();

AddNewAdminRoute.post("/addNewAdmin",AddNewAdminController)

export default AddNewAdminRoute;