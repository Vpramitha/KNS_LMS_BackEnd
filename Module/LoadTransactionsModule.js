import db from '../db2.js';

const LoadTransactionsModal=(callback)=>{

    const query = `
    SELECT 
    t.*,
    issueUser.UserId AS IssueAdminUserId,
    issueUser.FullName AS IssueAdminName,
    returnUser.UserId AS ReturnAdminUserId,
    returnUser.FullName AS ReturnAdminName,
    u.FullName AS UserName,
    book.Title,
    copy.CopyNumber
FROM 
    kns_library.transaction t
LEFT JOIN 
    kns_library.admin issueAdmin ON t.AdminId_Issue = issueAdmin.AdminId
LEFT JOIN 
    kns_library.user issueUser ON issueAdmin.UserId = issueUser.UserId
LEFT JOIN 
    kns_library.admin returnAdmin ON t.AdminId_Return = returnAdmin.AdminId
LEFT JOIN 
    kns_library.user returnUser ON returnAdmin.UserId = returnUser.UserId
LEFT JOIN 
    kns_library.user u ON t.UserId = u.UserId

LEFT JOIN 
    kns_library.resources copy ON copy.Resource_ID = t.Resource_ID

LEFT JOIN
    kns_library.bookprofile book ON book.ISBN = copy.ISBN
ORDER BY 
    t.TransactionId DESC;


  `;

    db.query(query, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            callback(err, null);
            return;
        }
        callback(null, result);
    });

}
export {LoadTransactionsModal}