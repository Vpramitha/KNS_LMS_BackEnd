import db from '../db2.js';

const AddNewStudentModal = (UserId, Password, Email, StudentId, StudentName, Grade, DOB, ContactNumber, Address, callback) => {
    const userInsertQuery = "INSERT INTO `user`( `UserName`, `Password`, `FullName`, `UserType`, `DOB`, `Address`, `Email`, `ContactNumber`) VALUES (?,?,?,?,?,?,?,?);";
    const UserType = "student";

    const checkDuplicateQuery = "SELECT COUNT(*) as count FROM `user` WHERE `UserName` = ? OR `Password` = ?;";

    const studentInsertQuery = "INSERT INTO `student`(`Student_Id`, `UserId`, `Grade`) VALUES (?,?,?);";

    db.query(checkDuplicateQuery, [UserId, Password], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            callback(err, null);
            return;
        }

        if (result[0].count > 0) {
            callback(new Error('Username or Password already exists'), null);
            return;
        }

        db.query(userInsertQuery, [UserId, Password, StudentName, UserType, DOB, Address, Email, ContactNumber], (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                callback(err, null);
                return;
            }

            const newUserId = result.insertId;

            db.query(studentInsertQuery, [StudentId, newUserId, Grade, DOB], (err, result) => {
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

export { AddNewStudentModal };
