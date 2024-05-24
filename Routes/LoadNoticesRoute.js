import express from "express";

import LoadNoticesController from '../controller/LoadNoticesController.js';

const LoadNoticesRoute =express.Router();

LoadNoticesRoute.get("/loadNotices",LoadNoticesController)

export default LoadNoticesRoute;


