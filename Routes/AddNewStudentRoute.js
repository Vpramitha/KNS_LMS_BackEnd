import express from "express";

import AddNewStudentController from '../controller/AddNewStudentController.js';

const AddNewStudentRoute =express.Router();

AddNewStudentRoute.post("/addNewStudent",AddNewStudentController)

export default AddNewStudentRoute;