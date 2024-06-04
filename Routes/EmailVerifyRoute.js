import express from "express";

import EmailVerifyController from '../controller/EmailVerifyController.js';

const EmailVerifyRoute =express.Router();

EmailVerifyRoute.post("/VerifyUser",EmailVerifyController)

export default EmailVerifyRoute;