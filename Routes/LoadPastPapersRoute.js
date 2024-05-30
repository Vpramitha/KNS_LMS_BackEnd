// routes/pastPaperRoutes.js
import express from 'express';
import { fetchAllPapers } from '../controller/LoadPastPapersController.js';

const LoadPastPaperRoute = express.Router();

// Route to get all past papers
LoadPastPaperRoute.get('/loadPastPapers', fetchAllPapers);

export default LoadPastPaperRoute;
