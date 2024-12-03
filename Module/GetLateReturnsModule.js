import db from '../db2.js';

// Function to get details of late returns from the transaction table
const GetLateReturnsModule = (CurrentDate,  callback) => {

// SQL query to select detailed information about late returns
    const query = `SELECT 
    t.*,
    issueUser.UserId AS IssueAdminUserId,
    issueUser.FullName AS IssueAdminName,
    returnUser.UserId AS ReturnAdminUserId,
    returnUser.FullName AS ReturnAdminName,
    u.FullName AS UserName,
    u.UserType,
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
WHERE 
    CAST(t.DueDate AS DATE) < CURDATE()
ORDER BY 
    t.TransactionId DESC;
`;

// Execute the query and pass the result to the callback function
    db.query(query, [CurrentDate], callback);
};

export { GetLateReturnsModule };

