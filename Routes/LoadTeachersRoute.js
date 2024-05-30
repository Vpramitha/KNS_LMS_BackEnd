import express from "express";

import LoadTeachersController from '../controller/LoadTeachersController.js';

const LoadTeachersRoute =express.Router();

LoadTeachersRoute.get("/loadTeachers",LoadTeachersController);

export default LoadTeachersRoute;