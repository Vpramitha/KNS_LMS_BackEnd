import db from '../db2.js';

const LoadTeachersModal=(callback)=>{

    const query = `
    SELECT 
        teacher.TeacherId,
        teacher.NIC,
        user.DOB,
        user.FullName,
        user.Email,
        user.Address,
        user.ContactNumber,
        user.UserId,
        user.VerifiedBy,
        user.Gender
    FROM 
        teacher
    INNER JOIN 
        user
    ON 
        teacher.UserId = user.UserId
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
export {LoadTeachersModal}