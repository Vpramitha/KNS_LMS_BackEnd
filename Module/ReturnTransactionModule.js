import db from '../db2.js';

const ReturnTransactionModal = (AdminId, TransactionId, CurrentDate, callback) => {
    const transactionUpdateQuery = `
        UPDATE transaction SET AdminId_Return = ?, ReturnDate = ?,Status="Completed" WHERE TransactionId = ?;
    `;

    const findResourceQuery = `SELECT Resource_Id FROM transaction WHERE TransactionId = ?`

    const updateAvailabilityQuery = `
        UPDATE resources
        SET Availability = true
        WHERE Resource_Id = ?;
    `;  

    db.query(transactionUpdateQuery, [AdminId, CurrentDate, TransactionId], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            callback(err, null);
            return;
        } else {
            db.query(findResourceQuery,[TransactionId], (err,result) => {
                            if (err) {
            console.error('Error executing query:', err);
            callback(err, null);
            return;
        } else {
            db.query(updateAvailabilityQuery,[result[0].Resource_Id], (err,result) =>{
                if (err) {
            console.error('Error executing query:', err);
            callback(err, null);
            return;
        } else {
            callback(null, result);
        }
            });
        }
        });
        }
    });
};

export { ReturnTransactionModal };
