import express from "express";
import AddTransactionController from '../controller/AddTransactionController.js';

const AddTransactionRoute = express.Router();

AddTransactionRoute.post("/addTransaction", AddTransactionController);

export default AddTransactionRoute;
