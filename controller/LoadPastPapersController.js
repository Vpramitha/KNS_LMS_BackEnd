// controllers/pastPaperController.js
import { getAllPapers } from '../Module/LoadPastPapersModal.js';

const fetchAllPapers = (req, res) => {
  getAllPapers((err, results) => {
    if (err) {
      console.error('Error fetching papers:', err);
      res.status(500).send('Server error');
    } else {
      res.json(results);
    }
  });
};

export { fetchAllPapers };
