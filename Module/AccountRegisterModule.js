import db from '../db2.js';

// Function to register a user account with updated details
const AccountRegisterModal = async (UserId, Key, UserName, Password, callback) => {

    // Query to update user details
    const AccountInsertQuery = "UPDATE user SET UserName = ?, Password = ? WHERE UserId = ? AND VerifyKey = ? ;";

    // Query to clear the verification key after successful update
    const ClearKeyQuery = "UPDATE user SET VerifyKey = NULL WHERE UserName = ? AND Password = ? AND UserId = ? ;";

    // Execute the query to update user details
    db.query(AccountInsertQuery, [UserName, Password, UserId, Key], async (err, result) => {
        if (err) {
            // Handle error
            console.error('Error executing query:', err);
            callback(err, null); // Return error to callback
            return;
        }

        // Execute the query to clear the verification key
        db.query(ClearKeyQuery, [UserName, Password, UserId], callback);
    });
}

export { AccountRegisterModal }
