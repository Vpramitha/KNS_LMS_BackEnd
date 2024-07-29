import db from '../db2.js';

const LostBookModal = (Resource_ID, ApprovedBy, Reasons,LostDate,TransactionId, callback) => {
    const lostBookQuery = `INSERT INTO lostbooks (Resource_ID, ApprovedBy, Reasons, LostDate)
VALUES (?,?,?,?);
`;

const updateResourceQuery = `UPDATE resources SET Availability = false, Lending_Ability = false WHERE Resource_ID = ? ;`;

const updateTransactionQuery = `UPDATE transaction SET Status = "Skipped" WHERE TransactionId = ? ;`;



db.query(lostBookQuery,[Resource_ID, ApprovedBy, Reasons,LostDate],(err,result) =>{
    if(err){
        callback(err,null);
        return;
    }
    db.query(updateResourceQuery,[Resource_ID],(err,result) => {
        if(err){
        callback(err,null);
        return;
    }
        db.query(updateTransactionQuery,[TransactionId],callback);
    });
});
};



export { LostBookModal };