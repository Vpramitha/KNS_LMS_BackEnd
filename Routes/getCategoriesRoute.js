import express from "express";

import getCatagoriesController from '../controller/getCategoriesController.js';

const getCatagoriesRoute =express.Router();

getCatagoriesRoute.get("/getCategories",getCatagoriesController)

export default getCatagoriesRoute;


