import db from '../db2.js';

const OutStandingListModal = (UserId, callback) => {
    // Define the SQL query with parameter placeholder
    const SearchUserQuery = `SELECT 
    transaction.Resource_ID,
    user.FullName,
    user.UserType,
    transaction.IssueDateTime,
    transaction.DueDate,
    issued_by_admin.fullName AS issuedByAdminFullName
FROM 
    transaction
JOIN 
    user ON transaction.userId = user.userId
JOIN 
    admin ON transaction.AdminId_Issue = admin.adminId
JOIN 
    user AS issued_by_admin ON admin.userId = issued_by_admin.userId
WHERE 
    transaction.status = 'issued' 
    AND transaction.userId = ?;
`;

    // Execute the query
    db.query(SearchUserQuery, [UserId], (err, results) => {

        console.log('test 1');
        if (err) {
            // Pass the error to the callback
            return callback(err);
        } else {
            // Pass the results to the callback
            return callback(null, results);
        }
    });
};

export { OutStandingListModal };
