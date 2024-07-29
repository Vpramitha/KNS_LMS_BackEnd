import db from '../db2.js';

const QrCodeScanModal = (ResourceId, callback) => {

    //const SearchResource = `SELECT * FROM resources WHERE Resource_ID = ?`;

    const SearchLatestTransaction = `SELECT r.*, t.*, u.*, b.*
FROM resources r
Left JOIN transaction t ON r.Resource_ID = t.Resource_ID
Left JOIN User u ON t.UserId = u.UserId
Left JOIN bookprofile b ON r.ISBN = b.ISBN
WHERE r.Resource_ID = ?
  AND t.TransactionId = (
    SELECT MAX(TransactionId)
    FROM transaction
    WHERE Resource_ID = ?
  );
`;

db.query(SearchLatestTransaction,[ResourceId,ResourceId],callback);
};



export { QrCodeScanModal };