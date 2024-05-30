import express from "express";

import LoadAdminsController from '../controller/LoadAdminsController.js';

const LoadAdminsRoute =express.Router();

LoadAdminsRoute.get("/loadAdmins",LoadAdminsController);

export default LoadAdminsRoute;