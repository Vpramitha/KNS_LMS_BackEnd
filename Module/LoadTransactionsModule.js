import db from '../db2.js';

const LoadTransactionsModal=(callback)=>{

    const query = `
    SELECT 
        *
    FROM 
        transaction
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