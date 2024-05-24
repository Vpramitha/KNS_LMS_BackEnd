import db from '../db2.js';

const LoadStudentsModal=(callback)=>{

    const query = `
    SELECT 
        student.Student_Id,
        student.Grade,
        user.DOB,
        user.UserName,
        user.Email,
        user.Address,
        user.ContactNumber
    FROM 
        student
    INNER JOIN 
        user
    ON 
        student.UserId = user.UserId
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