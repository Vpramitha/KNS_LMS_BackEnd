import express from "express";

import LoadCatalogController from '../controller/LoadCatalogController.js';

const LoadCatalogRoute =express.Router();

LoadCatalogRoute.get("/LoadCatalog",LoadCatalogController)

export default LoadCatalogRoute;