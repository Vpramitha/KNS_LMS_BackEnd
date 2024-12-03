import db from '../db2.js';
import { EmailVerifyModal } from "../Module/EmailVerifyModal.js";

// Function to add a new teacher to the database
const AddNewTeacherModal = (AdminId, TeacherId, Email, TeacherName, NIC, DOB, Gender, ContactNumber, Address, callback) => {
    // Query to insert a new user into the user table
    const userInsertQuery = "INSERT INTO `user`(`FullName`, `UserType`, `DOB`, `Gender`, `Address`, `Email`, `ContactNumber`) VALUES (?,?,?,?,?,?,?);";
    const UserType = "Teacher"; // User type is set to 'Teacher'

    // Query to check for duplicate TeacherId in the teacher table
    const checkDuplicateQuery = "SELECT COUNT(*) as count FROM `teacher` WHERE `TeacherId` = ?;";

    // Query to insert a new teacher into the teacher table
    const teacherInsertQuery = "INSERT INTO `teacher`(`TeacherId`, `UserId`, `NIC`) VALUES (?,?,?);";

    // Callback function to handle email verification
    const emailCallback = (error, result) => {
        if (error) {
            // Handle error during email verification
            console.error("Error:", error);
        } else {
            // Email verification successful
            console.log("The user verified:", result);
        }
    };

    // Check for duplicate TeacherId
    db.query(checkDuplicateQuery, [TeacherId], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            callback(err, null);
            return;
        }

        // If TeacherId already exists, return an error
        if (result[0].count > 0) {
            callback(new Error('already registered'), null);
            return;
        }

        // Insert new user into the user table
        db.query(userInsertQuery, [TeacherName, UserType, DOB, Gender, Address, Email, ContactNumber], (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                callback(err, null);
                return;
            }
            console.log(result);

            // Get the new UserId from the result
            const newUserId = result.insertId;

            // Insert new teacher into the teacher table
            db.query(teacherInsertQuery, [TeacherId, newUserId, NIC], (err, result) => {
                if (err) {
                    console.error('Error executing query:', err);
                    callback(err, null);
                    return;
                }

                // If AdminId is provided, verify the teacher's email
                if (AdminId) {
                    EmailVerifyModal(newUserId, AdminId, Email, emailCallback);
                }

                // Callback with the result of the teacher insertion
                callback(null, result);
            });
        });
    });
};

export { AddNewTeacherModal };
