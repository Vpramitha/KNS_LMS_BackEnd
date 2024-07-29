import express from "express";

import LoadLostBooksController from '../controller/LoadLostBooksController.js';

const LoadLostBooksRoute =express.Router();

LoadLostBooksRoute.get("/loadLostBooks",LoadLostBooksController);

export default LoadLostBooksRoute;