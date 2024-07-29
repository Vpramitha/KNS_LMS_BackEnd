import express from "express";

import ShortReportController from '../controller/ShortReportController.js';

const ShortReportRoute =express.Router();

ShortReportRoute.get("/shortReport",ShortReportController);

export default ShortReportRoute;