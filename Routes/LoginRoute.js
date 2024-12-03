//controller for login

import express from "express";

import loginController from '../controller/loginController.js';

const LoginRoute =express.Router();

LoginRoute.post("/login",loginController)

export default LoginRoute; 