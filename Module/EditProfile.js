import db from '../db2.js';

// Function to update user profile details
const editProfile = (FullName, Gender, DOB, Address, Email, ContactNumber, UserId, callback) => {
    // Query to update the user's profile information in the database
    const query = 'UPDATE user SET FullName = ?, Gender=?, DOB=?, Address=?, Email =?, ContactNumber = ? WHERE UserId = ?';
    
    // Execute the query to update the profile details
    db.query(query, [FullName, Gender, DOB, Address, Email, ContactNumber, UserId], callback);
};

export { editProfile };
