import db from '../db2.js';

const LoadAdminsModal=(callback)=>{

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

    db.query(query, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            callback(err, null);
            return;
        }
        callback(null, result);
    });

}
export {LoadAdminsModal}