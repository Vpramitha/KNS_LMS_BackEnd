import db from '../db2.js';

// Function to update notice details
const editNotice = (Title, Description, NoticeId, callback) => {
  // Query to update the title and description of a notice
  const query = 'UPDATE notices SET Title = ?, Description = ? WHERE NoticeId = ?';
  // Execute the query to update notice details
  db.query(query, [Title, Description, NoticeId], callback);
};

// Function to delete a notice by its ID
const deleteNotice = (NoticeId, callback) => {
  // Query to delete a notice from the database
  const query = 'DELETE FROM notices WHERE NoticeId = ?';
  // Execute the query to delete the notice
  db.query(query, [NoticeId], callback);
};

export { editNotice, deleteNotice };
