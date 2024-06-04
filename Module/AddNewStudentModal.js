import db from '../db2.js';
import { EmailVerifyModal } from "../Module/EmailVerifyModal.js";

const AddNewStudentModal = (AdminId,StudentId,Email, StudentName, Grade, DOB, ContactNumber, Address,Class, callback) => {
    const userInsertQuery = "INSERT INTO `user`(`FullName`, `UserType`, `DOB`, `Address`, `Email`, `ContactNumber`) VALUES (?,?,?,?,?,?);";
    const UserType = "student";

    const checkDuplicateQuery = "SELECT COUNT(*) as count FROM `student` WHERE `Student_Id` = ?;";

    const studentInsertQuery = "INSERT INTO `student`(`Student_Id`,`UserId`, `Grade`,`Class`) VALUES (?,?,?,?);";

    const emailCallback = (error, result) => {
    if (error) {
      // Handle error
      console.error("Error:", error);
      
    } else {
      // Student added successfully
      console.log("The user verified:", result);
      
    }
  };


    db.query(checkDuplicateQuery, [StudentId], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            callback(err, null);
            return;
        }

        if (result[0].count > 0) {
            callback(new Error('Username or Password already exists'), null);
            return;
        }

        db.query(userInsertQuery, [StudentName, UserType, DOB, Address, Email, ContactNumber], (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                callback(err, null);
                return;
            }
            console.log(result);

            const newUserId = result.insertId;

            db.query(studentInsertQuery, [StudentId,newUserId, Grade, Class], (err, result) => {
                if (err) {
                    console.error('Error executing query:', err);
                    callback(err, null);
                    return;
                }
                if(AdminId){
                EmailVerifyModal(newUserId,AdminId,Email, emailCallback);
            }
                callback(null, result);
            });
        });
    });
    
}; 

export { AddNewStudentModal };
