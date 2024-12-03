import db from '../db2.js';

// Function to add a new transaction to the database
const AddTransactionModal = (AdminId, UserId, ResourceId, CurrentDate, DueDate, callback) => {
    // Query to insert a new transaction into the Transaction table
    const transactionInsertQuery = `
        INSERT INTO Transaction (AdminId_Issue, UserId, Resource_Id, IssueDateTime, DueDate, Status)
        VALUES (?, ?, ?, ?, ?, "Issued");
    `;
    
    // Query to check the availability and lending ability of the resource
    const checkAvailabilityQuery = `
        SELECT Availability, Lending_Ability 
        FROM resources 
        WHERE Resource_Id = ?;
    `;

    // Query to update the availability status of the resource
    const updateAvailabilityQuery = `
        UPDATE resources
        SET Availability = false
        WHERE Resource_Id = ?;
    `;  

    // Check the availability and lending ability of the resource
    db.query(checkAvailabilityQuery, [ResourceId], (err, result) => {
        if (err) {
            // Handle error during availability check
            console.error('Error executing query:', err);
            callback(err, null);
            return;
        }

        // If the resource is not available or not allowed to be lent, return an error
        if (result.length === 0 || !result[0].Availability || !result[0].Lending_Ability) {
            console.error('The resource is not available:', err);
            callback(new Error('Resource is not available'), null);
            return;
        }
         
        // Insert the new transaction into the Transaction table
        db.query(transactionInsertQuery, [AdminId, UserId, ResourceId, CurrentDate, DueDate], (err, result) => {
            if (err) {
                // Handle error during transaction insertion
                console.error('Error executing query:', err);
                callback(err, null);
                return;
            }

            // Update the resource's availability status to false (not available)
            db.query(updateAvailabilityQuery, [ResourceId], (err, result) => {
                if (err) {
                    // Handle error during availability update
                    console.error('Error executing query:', err);
                    callback(err, null);
                    return;
                }
                // Callback with the result of the transaction insertion
                callback(null, result);
            });
        });
    });
};

export { AddTransactionModal };
