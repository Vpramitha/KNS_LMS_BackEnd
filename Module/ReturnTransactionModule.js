import db from '../db2.js';

// Function to handle the return transaction process
const ReturnTransactionModal = (AdminId, TransactionId, CurrentDate, callback) => {
    const transactionUpdateQuery = `
        UPDATE transaction SET AdminId_Return = ?, ReturnDate = ?, Status="Completed" WHERE TransactionId = ?;
    `;

    const findResourceQuery = `SELECT Resource_Id FROM transaction WHERE TransactionId = ?`;

    const updateAvailabilityQuery = `
        UPDATE resources
        SET Availability = true
        WHERE Resource_Id = ?;
    `;

    // Update the transaction record to set the return details and mark the transaction as completed
    db.query(transactionUpdateQuery, [AdminId, CurrentDate, TransactionId], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            callback(err, null);
            return;
        } else {
            // Find the resource ID associated with the transaction
            db.query(findResourceQuery, [TransactionId], (err, result) => {
                if (err) {
                    console.error('Error executing query:', err);
                    callback(err, null);
                    return;
                } else {
                    // Update the resource availability to true (i.e., available)
                    db.query(updateAvailabilityQuery, [result[0].Resource_Id], (err, result) => {
                        if (err) {
                            console.error('Error executing query:', err);
                            callback(err, null);
                            return;
                        } else {
                            // Return the result of the update operation
                            callback(null, result);
                        }
                    });
                }
            });
        }
    });
};

export { ReturnTransactionModal };
