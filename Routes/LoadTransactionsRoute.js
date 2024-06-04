import express from "express";

import LoadTransactionsController from '../controller/LoadTransactionsController.js';

const LoadTransactionsRoute =express.Router();

LoadTransactionsRoute.get("/loadTransactions",LoadTransactionsController);

export default LoadTransactionsRoute;