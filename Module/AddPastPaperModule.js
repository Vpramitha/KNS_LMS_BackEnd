import db from '../db2.js';

// Function to add a new past paper to the database
const AddPastPaperModal = (Year, Term, Grade, Subject, Title, DownloadLink, callback) => {
    // Query to insert a new past paper into the pastpapers table
    const paperInsertQuery = "INSERT INTO `pastpapers`(`year`, `term`, `grade`, `subject`, `title`, `downloadLink`) VALUES (?,?,?,?,?,?);";
    
    // Execute the query with the provided values for Year, Term, Grade, Subject, Title, and DownloadLink
    db.query(paperInsertQuery, [Year, Term, Grade, Subject, Title, DownloadLink], callback);
};

export { AddPastPaperModal };
