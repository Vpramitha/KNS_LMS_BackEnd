import express from "express";

import GenerateLastMonthUsageController from '../controller/GenerateLastMonthUsagecontroller.js';

const GenerateLastMonthUsageRouteRoute =express.Router();

GenerateLastMonthUsageRouteRoute.post("/personalReport",GenerateLastMonthUsageController)

export default GenerateLastMonthUsageRouteRoute;


