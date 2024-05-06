import express from "express";

import AddBookController from '../controller/AddBookController.js';

const AddBookRoute =express.Router();

AddBookRoute.post("/addBook",AddBookController)

export default AddBookRoute;