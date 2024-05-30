import db from '../db2.js';

const AddNewTeacherModal = (TeacherId,Email, TeacherName, NIC, DOB,Gender, ContactNumber, Address, callback) => {
    const userInsertQuery = "INSERT INTO `user`(`FullName`, `UserType`, `DOB`,`Gender`, `Address`, `Email`, `ContactNumber`) VALUES (?,?,?,?,?,?,?);";
    const UserType = "Teacher";

    const checkDuplicateQuery = "SELECT COUNT(*) as count FROM `teacher` WHERE `TeacherId` = ?;";

    const teacherInsertQuery = "INSERT INTO `teacher`(`TeacherId`,`UserId`, `NIC`) VALUES (?,?,?);";

    db.query(checkDuplicateQuery, [TeacherId], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            callback(err, null);
            return;
        }

        if (result[0].count > 0) {
            callback(new Error('already registered'), null);
            return;
        }

        db.query(userInsertQuery, [TeacherName, UserType, DOB,Gender, Address, Email, ContactNumber], (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                callback(err, null);
                return;
            }
            console.log(result);

            const newUserId = result.insertId;

            db.query(teacherInsertQuery, [TeacherId,newUserId, NIC], (err, result) => {
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

export { AddNewTeacherModal };
