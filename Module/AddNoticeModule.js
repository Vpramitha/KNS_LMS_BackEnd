import db from '../db2.js';

// Function to add a new notice to the database
const AddNoticeModal = (Subject, Notice, callback) => {
    // Query to insert a new notice into the Notices table
    const noticeInsertQuery = "INSERT INTO `Notices`(`Title`, `Description`) VALUES (?,?);";
    
    // Execute the query with the provided Subject and Notice values
    db.query(noticeInsertQuery, [Subject, Notice], callback);
};

export { AddNoticeModal };
