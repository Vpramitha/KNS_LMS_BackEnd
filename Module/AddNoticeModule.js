import db from '../db2.js';

const AddNoticeModal = (Subject,Notice, callback) => {
    const noticeInsertQuery = "INSERT INTO `Notices`( `Title`, `Description`) VALUES (?,?);";
    
    db.query(noticeInsertQuery, [Subject,Notice], callback);
    
};

export { AddNoticeModal };
 