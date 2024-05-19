import db from '../db2.js';

const EditCopy = (Availability, Lending_Ability, Resource_ID, callback) => {
    const query = "UPDATE resources SET Availability = ?, Lending_Ability = ? WHERE Resource_ID = ?";
    db.query(query, [Availability, Lending_Ability, Resource_ID], callback);
};

export { EditCopy };
