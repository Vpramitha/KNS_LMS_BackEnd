import express from "express";

import logoutController from '../controller/logoutController.js';

const LogoutRoute =express.Router();

LogoutRoute.get("/logout",logoutController);

export default LogoutRoute;