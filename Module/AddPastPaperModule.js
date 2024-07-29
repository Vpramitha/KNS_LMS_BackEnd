import db from '../db2.js';

const AddPastPaperModal = (Year,Term,Grade,Subject,Title,DownloadLink, callback) => {
    const paperInsertQuery = "INSERT INTO `pastpapers`( `year`, `term` , `grade` , `subject` , `title` , `downloadLink`) VALUES (?,?,?,?,?,?);";
    
    db.query(paperInsertQuery, [Year,Term,Grade,Subject,Title,DownloadLink], callback);
    
};

export { AddPastPaperModal };
