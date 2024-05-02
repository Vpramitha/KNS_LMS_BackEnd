import express from "express";

import AddBookController from '../controller/AddBookController.js';

const AddBookRoute =express.Router();

AddBookRoute.post("/",AddBookController)

export default AddBookRoute;