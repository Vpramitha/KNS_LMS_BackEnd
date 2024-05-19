import express from "express";

import selectCopiesController from '../controller/SelectCopiesController.js';

const selectCopiesRoute =express.Router();

selectCopiesRoute.post("/SelectCopies",selectCopiesController)

export default selectCopiesRoute;