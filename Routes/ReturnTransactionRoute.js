
import express from "express";

import ReturnTransactionController from '../controller/ReturnTransactionController.js';

const ReturnTransactionRoute =express.Router();

ReturnTransactionRoute.post("/returnBook",ReturnTransactionController)

export default ReturnTransactionRoute;