import db from '../db.js';

const addMember = (UserName,Password, callback) => {
    const query = 'INSERT INTO login (Name, Passwprd) VALUES (?, ?)';
db.query(query,[UserName,Password],callback);
};

export { addMember };