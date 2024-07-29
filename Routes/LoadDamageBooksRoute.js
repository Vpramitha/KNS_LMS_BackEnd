import express from "express";

import LoadDamageBooksController from '../controller/LoadDamageBooksController.js';

const LoadDamageBooksRoute =express.Router();

LoadDamageBooksRoute.get("/loadDamagedBooks",LoadDamageBooksController);

export default LoadDamageBooksRoute;