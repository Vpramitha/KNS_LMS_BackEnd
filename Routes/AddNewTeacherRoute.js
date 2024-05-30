import express from "express";

import AddNewTeacherController from '../controller/AddTeacherController.js';

const AddNewTeacherRoute =express.Router();

AddNewTeacherRoute.post("/addNewTeacher",AddNewTeacherController)

export default AddNewTeacherRoute;