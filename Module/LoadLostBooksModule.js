import db from '../db2.js';

const LoadLostBooksModal = (callback) => {
    const getLostBooksQuery = `SELECT 
    L.*, 
    R.Resource_ID, 
    R.CopyNumber, 
    B.ISBN,
    B.Title,
    lostUser.FullName AS LostByName,
    approveUser.FullName AS ApprovedByName
FROM 
    lostbooks L
LEFT JOIN 
    resources R ON L.Resource_ID = R.Resource_ID
LEFT JOIN 
    bookprofile B ON R.ISBN = B.ISBN
LEFT JOIN 
    user lostUser ON L.LostBy = lostUser.UserId
LEFT JOIN 
    admin A ON L.ApprovedBy = A.AdminId
LEFT JOIN 
    user approveUser ON A.UserId = approveUser.UserId;

`;
    
    db.query(getLostBooksQuery, callback);
    
};

export { LoadLostBooksModal };
