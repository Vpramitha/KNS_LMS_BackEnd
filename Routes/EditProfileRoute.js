import express from "express";

import EditProfileController from '../controller/EditProfileController.js';

const EditProfileRoute =express.Router();

EditProfileRoute.put("/editProfile",EditProfileController)

export default EditProfileRoute;