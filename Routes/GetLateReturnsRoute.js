import express from "express";

import GetLateReturnsController from '../controller/GetLateReturnsController.js';

const GetLateReturnsRoute =express.Router();

GetLateReturnsRoute.get("/getLateReturns",GetLateReturnsController);

export default GetLateReturnsRoute;