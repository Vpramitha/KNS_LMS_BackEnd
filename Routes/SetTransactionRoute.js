import express from "express";
import SetTransactionController from '../controller/SetTransactionController.js';

const SetTransactionRoute = express.Router();

SetTransactionRoute.post("/setTransaction", SetTransactionController);

export default SetTransactionRoute;
