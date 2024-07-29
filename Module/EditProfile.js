import db from '../db2.js';

const editProfile = (FullName, Gender, DOB, Address, Email, ContactNumber,UserId, callback) => {
    const query = 'UPDATE user SET FullName = ?, Gender=?, DOB=?, Address=?, Email =?, ContactNumber = ? WHERE UserId = ?';

    db.query(query, [FullName, Gender, DOB, Address, Email, ContactNumber,UserId], callback);
};

export { editProfile };
