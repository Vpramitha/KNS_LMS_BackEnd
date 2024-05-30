// models/pastPaperModel.js
import db from '../db2.js';

const getAllPapers = (callback) => {
  const query = 'SELECT * FROM pastpapers';

  db.query(query, callback);
};

export { getAllPapers };
