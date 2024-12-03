import db from '../db2.js';

// Function to generate a short report with various statistics
const ShortReportModal = (callback) => {

    // Initialize the ShortReport object with default values
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

    // SQL query to count all resources
    const countAllResources = `SELECT COUNT(*) AS TotalCount FROM resources`;
    // SQL query to count available resources
    const countAvailableResources = `SELECT COUNT(*) AS AvailableCount FROM resources WHERE Availability = true`;

    // SQL query to count male students
    const countStudentsMale = `SELECT COUNT(*) AS StudentMaleCount FROM user WHERE UserType = "Student" AND Gender = "Male"`;
    // SQL query to count female students
    const countStudentsFemale = `SELECT COUNT(*) AS StudentFemaleCount FROM user WHERE UserType = "Student" AND Gender = "Female"`;

    // SQL query to count male teachers
    const countTeachersMale = `SELECT COUNT(*) AS TeacherMaleCount FROM user WHERE UserType = "Teacher" AND Gender = "Male"`;
    // SQL query to count female teachers
    const countTeachersFemale = `SELECT COUNT(*) AS TeacherFemaleCount FROM user WHERE UserType = "Teacher" AND Gender = "Female"`;

    // SQL query to count male admins
    const countAdminsMale = `SELECT COUNT(*) AS AdminMaleCount FROM user WHERE UserType = "Admin" AND Gender = "Male"`;
    // SQL query to count female admins
    const countAdminsFemale = `SELECT COUNT(*) AS AdminFemaleCount FROM user WHERE UserType = "Admin" AND Gender = "Female"`;

    // Execute query to count all resources
    db.query(countAllResources, (err, result) => {
        if (err) {
            callback(err, null);  // Return error if query fails
            return;
        }
        ShortReport.NoOfResources = result[0].TotalCount;  // Update the total number of resources

        // Execute query to count available resources
        db.query(countAvailableResources, (err, result) => {
            if (err) {
                callback(err, null);  // Return error if query fails
                return;
            }
            ShortReport.NoOfAvailable = result[0].AvailableCount;  // Update the number of available resources
            ShortReport.PercentageAvailable = (ShortReport.NoOfAvailable / ShortReport.NoOfResources) * 100;  // Calculate percentage available

            // Execute query to count male students
            db.query(countStudentsMale, (err, result) => {
                if (err) {
                    callback(err, null);  // Return error if query fails
                    return;
                }
                ShortReport.StudentMale = result[0].StudentMaleCount;  // Update the number of male students

                // Execute query to count female students
                db.query(countStudentsFemale, (err, result) => {
                    if (err) {
                        callback(err, null);  // Return error if query fails
                        return;
                    }
                    ShortReport.StudentFemale = result[0].StudentFemaleCount;  // Update the number of female students

                    // Execute query to count male teachers
                    db.query(countTeachersMale, (err, result) => {
                        if (err) {
                            callback(err, null);  // Return error if query fails
                            return;
                        }
                        ShortReport.TeacherMale = result[0].TeacherMaleCount;  // Update the number of male teachers

                        // Execute query to count female teachers
                        db.query(countTeachersFemale, (err, result) => {
                            if (err) {
                                callback(err, null);  // Return error if query fails
                                return;
                            }
                            ShortReport.TeacherFemale = result[0].TeacherFemaleCount;  // Update the number of female teachers

                            // Execute query to count male admins
                            db.query(countAdminsMale, (err, result) => {
                                if (err) {
                                    callback(err, null);  // Return error if query fails
                                    return;
                                }
                                ShortReport.AdminMale = result[0].AdminMaleCount;  // Update the number of male admins

                                // Execute query to count female admins
                                db.query(countAdminsFemale, (err, result) => {
                                    if (err) {
                                        callback(err, null);  // Return error if query fails
                                        return;
                                    }
                                    ShortReport.AdminFemale = result[0].AdminFemaleCount;  // Update the number of female admins

                                    callback(null, ShortReport);  // Return the completed ShortReport object
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
