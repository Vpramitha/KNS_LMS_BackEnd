import express from "express";

import LostBookController from '../controller/LostBookController.js';

const LostBookRoute =express.Router();

LostBookRoute.post("/lostBook",LostBookController)

export default LostBookRoute;