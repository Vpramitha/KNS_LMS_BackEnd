import db from '../db2.js';

const AddCopies = (Count, ISBN, callback) => {
    // Define the query to get the maximum copy number for the given ISBN
    const maxCopyQuery = "SELECT MAX(copyNumber) AS maxCopyNumber FROM resources WHERE ISBN = ?";

    // Execute the query to get the maximum copy number
    db.query(maxCopyQuery, [ISBN], (err, result) => {
        if (err) {
            return callback(err);
        }

        // Get the max copy number, default to 0 if there are no copies yet
        let maxCopyNumber = result[0].maxCopyNumber;

        // Prepare the insert query
        const insertQuery = "INSERT INTO resources (copyNumber, ISBN) VALUES (?, ?)";

        // Function to insert copies recursively to handle asynchronous operations correctly
        const insertCopies = (i) => {
            if (i < Count) {
                // Increment copy number for each new copy
                maxCopyNumber++;
                
                // Insert the new copy into the database
                db.query(insertQuery, [maxCopyNumber, ISBN], (err) => {
                    if (err) {
                        return callback(err);
                    }

                    // Recursively call insertCopies to insert the next copy
                    insertCopies(i + 1);
                });
            } else {
                // All copies have been inserted, update the book profile table
                const updateBookProfileQuery = "UPDATE bookprofile SET NumberOfCopies = NumberOfCopies + ? WHERE ISBN = ?";
                db.query(updateBookProfileQuery, [Count, ISBN], (err) => {
                    if (err) {
                        return callback(err);
                    }
                    // All operations successful, invoke the callback with no error
                    callback(null);
                });
            }
        };

        // Start inserting copies
        insertCopies(0);
    });
};

export { AddCopies };
