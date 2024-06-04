import db from '../db2.js';

const AccountRegisterModal = async (UserId, Key, UserName,Password, callback) => {

    const AccountInsertQuery = "UPDATE user SET UserName = ?, Password = ? WHERE UserId = ? AND VerifyKey = ? ;";

    const ClearKeyQuery = "UPDATE user SET VerifyKey = NULL WHERE UserName = ? AND Password = ? AND UserId = ? ;";

    db.query(AccountInsertQuery,[UserName,Password,UserId,Key],async (err, result) =>{
        if(err){
            console.error('Error executing query:', err);
                callback(err, null);
                return;
        }

        db.query(ClearKeyQuery,[UserName,Password,UserId],callback)
    });

}

export {AccountRegisterModal}