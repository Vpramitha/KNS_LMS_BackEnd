import express from "express";

import EditCopyController from '../controller/EditCopyController.js';

const EditCopyRoute =express.Router();

EditCopyRoute.post("/editCopy",EditCopyController)

export default EditCopyRoute;