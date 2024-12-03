import db from '../db2.js';

// Function to generate usage statistics for the last month based on UserType (Admin or regular user)
const GenerateLastMonthUsage = (UserType, UserId, AdminId, callback) => {
    // Query for regular users
    const query = `
        SELECT 
            dates.Date,
            IFNULL(issueCounts.NumberOfIssues, 0) AS NumberOfIssues,
            IFNULL(returnCounts.NumberOfReturns, 0) AS NumberOfReturns
        FROM
            (SELECT CURDATE() - INTERVAL (a.a + (10 * b.a) + (100 * c.a)) DAY AS Date
             FROM (SELECT 0 AS a UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) AS a
             CROSS JOIN (SELECT 0 AS a UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) AS b
             CROSS JOIN (SELECT 0 AS a UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) AS c
             WHERE CURDATE() - INTERVAL (a.a + (10 * b.a) + (100 * c.a)) DAY >= CURDATE() - INTERVAL 30 DAY
             ) AS dates
        LEFT JOIN
            (SELECT 
                DATE(IssueDateTime) AS Date,
                COUNT(*) AS NumberOfIssues
             FROM 
                transaction
             WHERE 
                IssueDateTime >= CURDATE() - INTERVAL 30 DAY
                AND UserId = ?
             GROUP BY 
                DATE(IssueDateTime)) AS issueCounts
        ON dates.Date = issueCounts.Date
        LEFT JOIN
            (SELECT 
                DATE(ReturnDate) AS Date,
                COUNT(*) AS NumberOfReturns
             FROM 
                transaction
             WHERE 
                ReturnDate >= CURDATE() - INTERVAL 30 DAY
                AND UserId = ?
             GROUP BY 
                DATE(ReturnDate)) AS returnCounts
        ON dates.Date = returnCounts.Date
        ORDER BY 
            dates.Date;
    `;

    // Query for Admin users
    const queryAdmin = `
        SELECT 
            dates.Date,
            IFNULL(issueCounts.NumberOfIssues, 0) AS NumberOfIssues,
            IFNULL(returnCounts.NumberOfReturns, 0) AS NumberOfReturns
        FROM
            (SELECT CURDATE() - INTERVAL (a.a + (10 * b.a) + (100 * c.a)) DAY AS Date
             FROM (SELECT 0 AS a UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) AS a
             CROSS JOIN (SELECT 0 AS a UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) AS b
             CROSS JOIN (SELECT 0 AS a UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) AS c
             WHERE CURDATE() - INTERVAL (a.a + (10 * b.a) + (100 * c.a)) DAY >= CURDATE() - INTERVAL 30 DAY
             ) AS dates
        LEFT JOIN
            (SELECT 
                DATE(IssueDateTime) AS Date,
                COUNT(*) AS NumberOfIssues
             FROM 
                transaction
             WHERE 
                IssueDateTime >= CURDATE() - INTERVAL 30 DAY
                AND AdminId_Issue = ?
             GROUP BY 
                DATE(IssueDateTime)) AS issueCounts
        ON dates.Date = issueCounts.Date
        LEFT JOIN
            (SELECT 
                DATE(ReturnDate) AS Date,
                COUNT(*) AS NumberOfReturns
             FROM 
                transaction
             WHERE 
                ReturnDate >= CURDATE() - INTERVAL 30 DAY
                AND AdminId_Return = ?
             GROUP BY 
                DATE(ReturnDate)) AS returnCounts
        ON dates.Date = returnCounts.Date
        ORDER BY 
            dates.Date;
    `;

    // Execute the appropriate query based on UserType
    if (UserType === 'Admin') {
        db.query(queryAdmin, [AdminId, AdminId], callback);
    } else {
        db.query(query, [UserId, UserId], callback);
    }
};

export { GenerateLastMonthUsage };
