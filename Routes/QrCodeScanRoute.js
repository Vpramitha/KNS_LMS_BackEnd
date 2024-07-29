import express from "express";

import QrCodeScanController from '../controller/QrCodeScanController.js';

const QrCodeScanRoute =express.Router();

QrCodeScanRoute.post("/qrScan",QrCodeScanController)

export default QrCodeScanRoute;