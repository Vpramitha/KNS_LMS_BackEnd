import express from "express";

import LoadMembersController from '../controller/LoadMembersController.js';

const LoadMembersRoute =express.Router();

LoadMembersRoute.get("/LoadMembers",LoadMembersController)

export default LoadMembersRoute;
