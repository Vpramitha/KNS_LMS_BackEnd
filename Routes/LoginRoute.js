import express from "express";

import loginController from '../controller/loginController.js';

const LoginRoute =express.Router();

LoginRoute.post("/",loginController.authentication)

export default LoginRoute;