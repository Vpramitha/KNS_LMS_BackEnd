import express from "express";

import AccountRegisterController from '../controller/AccountRegisterController.js';

const AccountRegisterRoute =express.Router();

AccountRegisterRoute.post("/accountRegister",AccountRegisterController)

export default AccountRegisterRoute;