import db from '../db2.js';
import { EmailVerifyModal } from "../Module/EmailVerifyModal.js";

// Function to add a new admin to the database
const AddNewAdminModal = (AdminIdVerify, AdminId, Email, FullName, DOB, ContactNumber, Address, NIC, callback) => {
    // Query to insert a new user into the user table
    const userInsertQuery = `
        INSERT INTO user (FullName, UserType, DOB, Address, Email, ContactNumber)
        VALUES (?, ?, ?, ?, ?, ?);
    `;
    // Define the user type as Admin
    const UserType = "Admin";

    // Query to check for duplicate AdminId in the admin table
    const checkDuplicateQuery = `
        SELECT COUNT(*) as count 
        FROM admin 
        WHERE AdminId = ?;
    `;

    // Query to insert a new admin into the admin table
    const adminInsertQuery = `
        INSERT INTO admin (AdminId, UserId, NIC)
        VALUES (?, ?, ?);
    `;

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

    // Check if AdminId already exists
    db.query(checkDuplicateQuery, [AdminId], (err, result) => {
        if (err) {
            // Handle query error
            console.error('Error executing query:', err);
            callback(err, null);
            return;
        }

        // If AdminId already exists, return error
        if (result[0].count > 0) {
            console.log('Duplicate AdminId count:', result[0].count);
            callback(new Error('AdminId already exists'), null);
            return;
        }

        // Insert new user into the user table
        db.query(userInsertQuery, [FullName, UserType, DOB, Address, Email, ContactNumber], (err, result) => {
            if (err) {
                // Handle user insert error
                console.error('Error executing user insert query:', err);
                callback(err, null);
                return;
            }

            // Get the newly inserted user's ID
            const newUserId = result.insertId;

            // Insert new admin into the admin table
            db.query(adminInsertQuery, [AdminId, newUserId, NIC], (err, result) => {
                if (err) {
                    // Handle admin insert error
                    console.error('Error executing admin insert query:', err);
                    callback(err, null);
                    return;
                }

                // If AdminIdVerify is true, send email verification
                if (AdminIdVerify) {
                    EmailVerifyModal(newUserId, AdminId, Email, emailCallback);
                }

                // Call the final callback
                callback(null, result);
            });
        });
    });
};

export { AddNewAdminModal };
