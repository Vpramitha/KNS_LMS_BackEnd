import db from '../db2.js';

const LoadStudentsModal=(callback)=>{

    const query = `
    SELECT 
    student.Student_Id,
    student.Grade,
    student.Class,
    user.DOB,
    user.FullName,
    user.Email,
    user.Address,
    user.ContactNumber,
    user.UserId,
    user.VerifiedBy,
    user.Gender
FROM 
    student
INNER JOIN 
    user
ON 
    student.UserId = user.UserId
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
export {LoadStudentsModal}