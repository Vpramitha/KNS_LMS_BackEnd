import db from '../db2.js';

const getWeeklyTransactionSummary = (callback) => {
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
             WHERE CURDATE() - INTERVAL (a.a + (10 * b.a) + (100 * c.a)) DAY >= CURDATE() - INTERVAL 7 DAY
             ) AS dates
        LEFT JOIN
            (SELECT 
                DATE(IssueDateTime) AS Date,
                COUNT(*) AS NumberOfIssues
             FROM 
                transaction
             WHERE 
                IssueDateTime >= CURDATE() - INTERVAL 7 DAY
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
                ReturnDate >= CURDATE() - INTERVAL 7 DAY
             GROUP BY 
                DATE(ReturnDate)) AS returnCounts
        ON dates.Date = returnCounts.Date
        ORDER BY 
            dates.Date;
    `;
    
    db.query(query, callback);
};

export { getWeeklyTransactionSummary };
