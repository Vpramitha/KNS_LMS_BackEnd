import db from '../db2.js';

const AddNewAdminModal = (AdminId,Email, FullName,DOB, ContactNumber, Address,NIC, callback) => {
    const userInsertQuery = "INSERT INTO `user`(`FullName`, `UserType`, `DOB`, `Address`, `Email`, `ContactNumber`) VALUES (?,?,?,?,?,?);";
    const UserType = "Admin";

    const checkDuplicateQuery = "SELECT COUNT(*) as count FROM `admin` WHERE `AdminId` = ?;";

    const adminInsertQuery = "INSERT INTO `admin`(`AdminId`,`UserId`, `NIC`) VALUES (?,?,?);";

    db.query(checkDuplicateQuery, [AdminId], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            callback(err, null);
            return;
        }

        if (result[0].count > 0) {
            callback(new Error('Username or Password already exists'), null);
            return;
        }

        db.query(userInsertQuery, [FullName, UserType, DOB, Address, Email, ContactNumber], (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                callback(err, null);
                return;
            }
            console.log(result);

            const newUserId = result.insertId;

            db.query(adminInsertQuery, [AdminId,newUserId,NIC], (err, result) => {
                if (err) {
                    console.error('Error executing query:', err);
                    callback(err, null);
                    return;
                }

                callback(null, result);
            });
        });
    });
    
};

export { AddNewAdminModal };
