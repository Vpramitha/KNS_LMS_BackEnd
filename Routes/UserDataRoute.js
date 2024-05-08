import express from "express";

import UserDataController from '../controller/UserDataController.js';

const UserDataRoute =express.Router();

UserDataRoute.get("/userData",UserDataController);

export default UserDataRoute;