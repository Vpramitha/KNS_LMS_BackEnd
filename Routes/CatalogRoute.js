import express from "express";

import catalogController from '../controller/catalogController.js';

const CatalogRoute =express.Router();

CatalogRoute.get("/",catalogController.loadCatalog);

export default CatalogRoute;
