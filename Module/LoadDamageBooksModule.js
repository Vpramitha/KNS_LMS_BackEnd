import db from '../db2.js';

const LoadDamageBooksModal = (callback) => {
    const getDamageBooksQuery = `SELECT 
    D.*, 
    R.Resource_ID, 
    R.CopyNumber, 
    B.ISBN,
    B.Title,
    approveAdmin.FullName AS ApprovedByName
FROM 
    damageresources D
LEFT JOIN 
    resources R ON D.ResourceId = R.Resource_ID
LEFT JOIN 
    bookprofile B ON R.ISBN = B.ISBN
LEFT JOIN 
    admin A ON D.ApprovedBy = A.AdminId
LEFT JOIN 
    user approveAdmin ON A.UserId = A.UserId;
`;
    
    db.query(getDamageBooksQuery, callback);
    
};   

export { LoadDamageBooksModal };
