
import express from "express";

import getWeeklyTransactionSummaryController from '../controller/getWeeklyTransactionSummaryController.js';

const getWeeklyTransactionSummaryRoute =express.Router();

getWeeklyTransactionSummaryRoute.get("/loadWeekReport",getWeeklyTransactionSummaryController);

export default getWeeklyTransactionSummaryRoute;