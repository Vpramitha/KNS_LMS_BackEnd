import db from '../db2.js';

// Function to load and return a list of admins
const LoadAdminsModal = (callback) => {

    const query = `
    SELECT 
        Admin.AdminId,
        Admin.NIC,
        user.DOB,
        user.FullName,
        user.Email,
        user.Address,
        user.ContactNumber,
        user.VerifiedBy,
        user.Gender,
        user.UserId
    FROM 
        admin
    INNER JOIN 
        user
    ON 
        admin.UserId = user.UserId

    ORDER BY 
    user.UserId DESC;
  `;

    // Execute the query to load admins
    db.query(query, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            callback(err, null);
            return;
        }
        // Return the result of the query
        callback(null, result);
    });

}

export { LoadAdminsModal }
