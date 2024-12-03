import db from '../db2.js';

// Function to update resource copy details
const EditCopy = (Availability, Lending_Ability, Resource_ID, callback) => {
    // Query to update the availability and lending ability of a resource copy
    const query = "UPDATE resources SET Availability = ?, Lending_Ability = ? WHERE Resource_ID = ?";

    // Execute the query to update resource copy details
    db.query(query, [Availability, Lending_Ability, Resource_ID], callback);
};

export { EditCopy };
