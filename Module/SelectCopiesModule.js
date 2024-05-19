import db from '../db2.js';

const selectCopies = (ISBN, callback) => {
    const query = 'SELECT Resource_ID,Availability,Lending_Ability,CopyNumber FROM resources WHERE ISBN = ?';
    db.query(query,[ISBN],callback);
};

export { selectCopies };