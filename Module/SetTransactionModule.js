import db from '../db2.js';

const SetTransactionModal = (AdminId, UserId, ResourceId, CurrentDate, DueDate, callback) => {
    const checkAdminQuery = `
        SELECT user.*, admin.* 
        FROM user 
        INNER JOIN admin ON user.UserId = admin.UserId 
        WHERE admin.AdminId = ?;
    `;

    const checkAvailabilityQuery = `
        SELECT Availability, Lending_Ability 
        FROM resources 
        WHERE Resource_Id = ?;
    `;

    const checkUseroutstandingTransactionsQuery = `
        SELECT COUNT(*) AS outstandingTransactions
        FROM transaction 
        WHERE UserId = ? AND Status = "Issued";
    `;

    const checkUserQuery = `
        SELECT COUNT(*) AS userCount
        FROM user 
        WHERE UserId = ? ;
    `;

    let response = {
        adminFound: false,
        resourceAvailability: false,
        lendingAbility: false,
        User: false,
        outstandingTransactionCount: 0
    };

    // Check if admin exists
    db.query(checkAdminQuery, [AdminId], (err, adminResult) => {
        if (err) {
            console.error('Error executing admin check query:', err);
            callback(err, null);
            return;
        }
        response.adminFound = adminResult.length > 0;});

        // Check resource availability
        db.query(checkAvailabilityQuery, [ResourceId], (err, resourceResult) => {
            if (err) {
                console.error('Error executing resource availability query:', err);
                callback(err, null);
                return;
            }
            if (resourceResult.length > 0) {
                response.resourceAvailability = resourceResult[0].Availability;
                response.lendingAbility = resourceResult[0].Lending_Ability;
            }});

            db.query(checkUserQuery, [UserId], (err, users) => {
                if (err) {
                    console.error('Error executing user check query:', err);
                    callback(err, null);
                    return;
                }else if(users[0].userCount===1){
                        response.User = true;
                }else{
                    response.User = false;
                }});
                

            // Check user's outstanding transactions
            db.query(checkUseroutstandingTransactionsQuery, [UserId], (err, userResult) => {
                if (err) {
                    console.error('Error executing user check query:', err);
                    callback(err, null);
                    return;
                }
                response.outstandingTransactionCount = userResult[0].outstandingTransactions;

                // Return the final response
                callback(null, response);
            });
        
    
};

export { SetTransactionModal };
