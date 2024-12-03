// controllers/pastPaperController.js
import { getAllPapers } from '../Module/LoadPastPapersModal.js';

// Controller for fetching all past papers
const fetchAllPapers = (req, res) => {
  // Call getAllPapers function and handle the response
  getAllPapers((err, results) => {
    if (err) {
      // Handle error case
      console.error('Error fetching papers:', err);
      res.status(500).send('Server error'); // Respond with a server error status
    } else {
      // Send the results as JSON
      res.json(results);
    }
  });
};

export { fetchAllPapers };

