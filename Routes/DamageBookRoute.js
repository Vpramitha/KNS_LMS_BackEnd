import express from "express";

import DamageBookController from '../controller/DamageBookController.js';

const DamageBookRoute =express.Router();

DamageBookRoute.post("/damageBook",DamageBookController)

export default DamageBookRoute;