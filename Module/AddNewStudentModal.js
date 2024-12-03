import db from '../db2.js';
import { EmailVerifyModal } from "../Module/EmailVerifyModal.js";

// Function to add a new student to the database
const AddNewStudentModal = (AdminId, StudentId, Email, StudentName, Grade, DOB, ContactNumber, Address, Class, callback) => {
    // Query to insert a new user into the user table
    const userInsertQuery = "INSERT INTO `user`(`FullName`, `UserType`, `DOB`, `Address`, `Email`, `ContactNumber`) VALUES (?,?,?,?,?,?);";
    const UserType = "student";

    // Query to check for duplicate StudentId in the student table
    const checkDuplicateQuery = "SELECT COUNT(*) as count FROM `student` WHERE `Student_Id` = ?;";

    // Query to insert a new student into the student table
    const studentInsertQuery = "INSERT INTO `student`(`Student_Id`,`UserId`, `Grade`,`Class`) VALUES (?,?,?,?);";

    // Callback for email verification
    const emailCallback = (error, result) => {
        if (error) {
            // Handle error
            console.error("Error:", error);
        } else {
            // Email verification successful
            console.log("The user verified:", result);
        }
    };

    // Check if StudentId already exists
    db.query(checkDuplicateQuery, [StudentId], (err, result) => {
        if (err) {
            // Handle query error
            console.error('Error executing query:', err);
            callback(err, null);
            return;
        }

        // If StudentId already exists, return error
        if (result[0].count > 0) {
            callback(new Error('Username or Password already exists'), null);
            return;
        }

        // Insert new user into the user table
        db.query(userInsertQuery, [StudentName, UserType, DOB, Address, Email, ContactNumber], (err, result) => {
            if (err) {
                // Handle user insert error
                console.error('Error executing query:', err);
                callback(err, null);
                return;
            }
            console.log(result);

            // Get the newly inserted user's ID
            const newUserId = result.insertId;

            // Insert new student into the student table
            db.query(studentInsertQuery, [StudentId, newUserId, Grade, Class], (err, result) => {
                if (err) {
                    // Handle student insert error
                    console.error('Error executing query:', err);
                    callback(err, null);
                    return;
                }
                
                // If AdminId is provided, send email verification
                if (AdminId) {
                    EmailVerifyModal(newUserId, AdminId, Email, emailCallback);
                }

                // Call the final callback
                callback(null, result);
            });
        });
    });
};

export { AddNewStudentModal };
