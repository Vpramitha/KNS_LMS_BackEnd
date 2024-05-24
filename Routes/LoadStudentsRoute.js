import express from "express";

import LoadStudentsController from '../controller/LoadStudentsController.js';

const LoadStudentsRoute =express.Router();

LoadStudentsRoute.get("/loadStudents",LoadStudentsController);

export default LoadStudentsRoute;