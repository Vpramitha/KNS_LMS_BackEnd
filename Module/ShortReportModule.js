import db from '../db2.js';

const ShortReportModal = (callback) => {

    let ShortReport = {
        NoOfResources: 0,
        NoOfAvailable: 0,
        PercentageAvailable: 0,
        StudentMale: 0,
        StudentFemale: 0,
        TeacherMale: 0,
        TeacherFemale: 0,
        AdminMale: 0,
        AdminFemale: 0
    };

    const countAllResources = `SELECT COUNT(*) AS TotalCount FROM resources`;
    const countAvailableResources = `SELECT COUNT(*) AS AvailableCount FROM resources WHERE Availability = true`;

    const countStudentsMale = `SELECT COUNT(*) AS StudentMaleCount FROM user WHERE UserType = "Student" AND Gender = "Male"`;
    const countStudentsFemale = `SELECT COUNT(*) AS StudentFemaleCount FROM user WHERE UserType = "Student" AND Gender = "Female"`;

    const countTeachersMale = `SELECT COUNT(*) AS TeacherMaleCount FROM user WHERE UserType = "Teacher" AND Gender = "Male"`;
    const countTeachersFemale = `SELECT COUNT(*) AS TeacherFemaleCount FROM user WHERE UserType = "Teacher" AND Gender = "Female"`;

    const countAdminsMale = `SELECT COUNT(*) AS AdminMaleCount FROM user WHERE UserType = "Admin" AND Gender = "Male"`;
    const countAdminsFemale = `SELECT COUNT(*) AS AdminFemaleCount FROM user WHERE UserType = "Admin" AND Gender = "Female"`;

    db.query(countAllResources, (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        ShortReport.NoOfResources = result[0].TotalCount;

        db.query(countAvailableResources, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            }
            ShortReport.NoOfAvailable = result[0].AvailableCount;
            ShortReport.PercentageAvailable = (ShortReport.NoOfAvailable / ShortReport.NoOfResources) * 100;

            db.query(countStudentsMale, (err, result) => {
                if (err) {
                    callback(err, null);
                    return;
                }
                ShortReport.StudentMale = result[0].StudentMaleCount;

                db.query(countStudentsFemale, (err, result) => {
                    if (err) {
                        callback(err, null);
                        return;
                    }
                    ShortReport.StudentFemale = result[0].StudentFemaleCount;

                    db.query(countTeachersMale, (err, result) => {
                        if (err) {
                            callback(err, null);
                            return;
                        }
                        ShortReport.TeacherMale = result[0].TeacherMaleCount;

                        db.query(countTeachersFemale, (err, result) => {
                            if (err) {
                                callback(err, null);
                                return;
                            }
                            ShortReport.TeacherFemale = result[0].TeacherFemaleCount;

                            db.query(countAdminsMale, (err, result) => {
                                if (err) {
                                    callback(err, null);
                                    return;
                                }
                                ShortReport.AdminMale = result[0].AdminMaleCount;

                                db.query(countAdminsFemale, (err, result) => {
                                    if (err) {
                                        callback(err, null);
                                        return;
                                    }
                                    ShortReport.AdminFemale = result[0].AdminFemaleCount;

                                    callback(null, ShortReport);
                                });
                            });
                        });
                    });
                });
            });
        });
    });
};

export { ShortReportModal };
