import db from '../db2.js';
import { EmailVerifyModal } from "../Module/EmailVerifyModal.js";

const AddNewAdminModal = (AdminIdVerify,AdminId, Email, FullName, DOB, ContactNumber, Address, NIC, callback) => {
    const userInsertQuery = `
        INSERT INTO user (FullName, UserType, DOB, Address, Email, ContactNumber)
        VALUES (?, ?, ?, ?, ?, ?);
    `;
    const UserType = "Admin";

    const checkDuplicateQuery = `
        SELECT COUNT(*) as count 
        FROM admin 
        WHERE AdminId = ?;
    `;

    const adminInsertQuery = `
        INSERT INTO admin (AdminId, UserId, NIC)
        VALUES (?, ?, ?);
    `;

    const emailCallback = (error, result) => {
    if (error) {
      // Handle error
      console.error("Error:", error);
      
    } else {
      // Student added successfully
      console.log("The user verified:", result);
      
    }
  };

    db.query(checkDuplicateQuery, [AdminId], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            callback(err, null);
            return;
        }

        if (result[0].count > 0) {
            console.log('Duplicate AdminId count:', result[0].count);
            callback(new Error('AdminId already exists'), null);
            return;
        }

        db.query(userInsertQuery, [FullName, UserType, DOB, Address, Email, ContactNumber], (err, result) => {
            if (err) {
                console.error('Error executing user insert query:', err);
                callback(err, null);
                return;
            }

            const newUserId = result.insertId;

            db.query(adminInsertQuery, [AdminId, newUserId, NIC], (err, result) => {
                if (err) {
                    console.error('Error executing admin insert query:', err);
                    callback(err, null);
                    return;
                }

                if(AdminIdVerify){
                EmailVerifyModal(newUserId,AdminId,Email, emailCallback);
            }

                callback(null, result);
            });
        });
    });
};

export { AddNewAdminModal };
