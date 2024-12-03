import db from '../db2.js';

// Function to handle damage book updates
const DamageBookModal = (ResourceId, Damage, ApprovedBy, DamagedDate, callback) => {
    // Query to insert damage details into the damageresources table
    const damageUpdateQuery = `INSERT INTO damageresources (ResourceId, Damage, ApprovedBy, DamagedDate)
VALUES (?,?,?,?);
`;

    // Query to update the resource's availability and lending ability
    const updateResourceQuery = `UPDATE resources SET Availability = true, Lending_Ability = false WHERE Resource_ID = ? ;`;

    // Insert damage details into the damageresources table
    db.query(damageUpdateQuery, [ResourceId, Damage, ApprovedBy, DamagedDate], (err, result) => {
        if (err) {
            // Handle error during damage update
            callback(err, null);
            return;
        }

        // Update the resource's availability and lending ability
        db.query(updateResourceQuery, [ResourceId], (err, result) => {
            if (err) {
                // Handle error during resource update
                callback(err, null);
                return;
            }
            // Callback with the result of the resource update
            callback(null, result);
        });
    });
};

export { DamageBookModal };
