import express from "express";

import AddCopiesController from '../controller/AddCopiesController.js';

const AddCopiesRoute =express.Router();

AddCopiesRoute.post("/addCopies",AddCopiesController)

export default AddCopiesRoute;