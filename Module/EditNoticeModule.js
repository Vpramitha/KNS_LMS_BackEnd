import db from '../db2.js';

const editNotice = (Title, Description, NoticeId, callback) => {
  const query = 'UPDATE notices SET Title = ?, Description = ? WHERE NoticeId = ?';
  db.query(query, [Title, Description, NoticeId], callback);
};

const deleteNotice = (NoticeId, callback) => {
  const query = 'DELETE FROM notices WHERE NoticeId = ?';
  db.query(query, [NoticeId], callback);
};

export { editNotice, deleteNotice };
