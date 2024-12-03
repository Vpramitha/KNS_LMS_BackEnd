
import express from "express";

import OutStandingListController from '../controller/OutStandingListController.js';

const OutStandingListRoute =express.Router();

OutStandingListRoute.post("/outstandingTransactions",OutStandingListController)

export default OutStandingListRoute;