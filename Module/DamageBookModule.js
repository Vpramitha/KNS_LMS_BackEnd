import db from '../db2.js';

const DamageBookModal = (ResourceId,Damage, ApprovedBy, DamagedDate, callback) => {
    const damageUpdateQuery = `INSERT INTO damageresources (ResourceId,Damage, ApprovedBy, DamagedDate)
VALUES (?,?,?,?);
`;

const updateResourceQuery = `UPDATE resources SET Availability = true, Lending_Ability = false WHERE Resource_ID = ? ;`;





db.query(damageUpdateQuery,[ResourceId,Damage, ApprovedBy, DamagedDate],(err,result) =>{
    if(err){
        callback(err,null);
        return;
    }
    db.query(updateResourceQuery,[ResourceId],callback => {
        if(err){
        callback(err,null);
        return;
    }
       
    });
});
};



export { DamageBookModal };