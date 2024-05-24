import express from "express";

import EditBookController from '../controller/EditBookController.js';

const EditBookRoute =express.Router();

EditBookRoute.post("/editBook",EditBookController)

export default EditBookRoute;