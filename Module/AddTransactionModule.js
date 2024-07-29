import db from '../db2.js';

const AddTransactionModal = (AdminId, UserId, ResourceId, CurrentDate, DueDate, callback) => {
    const transactionInsertQuery = `
        INSERT INTO Transaction (AdminId_Issue, UserId, Resource_Id, IssueDateTime, DueDate,Status)
        VALUES (?, ?, ?, ?, ?, "Issued");
    `;
    
    const checkAvailabilityQuery = `
        SELECT Availability,Lending_Ability 
        FROM resources 
        WHERE Resource_Id = ?;
    `;

    const updateAvailabilityQuery = `
        UPDATE resources
        SET Availability = false
        WHERE Resource_Id = ?;
    `;  

    db.query(checkAvailabilityQuery, [ResourceId], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            callback(err, null);
            return;
        }
        if (result.length === 0 || !result[0].Availability || !result[0].Lending_Ability) {
            console.error('The resource is not available:', err);
            callback(new Error('Resource is not available'), null);
            return;
        }
         
        db.query(transactionInsertQuery, [AdminId, UserId, ResourceId, CurrentDate, DueDate], (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                callback(err, null);
                return;
            }
            db.query(updateAvailabilityQuery, [ResourceId], (err, result) => {
                if (err) {
                    console.error('Error executing query:', err);
                    callback(err, null);
                    return;
                }
                callback(null, result);
            });
        });
    });
};

export { AddTransactionModal };
