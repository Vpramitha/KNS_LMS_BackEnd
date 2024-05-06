import db from '../db.js';

const login = (UserName,password, callback) => {
    const query = 'SELECT * FROM login WHERE Name = ? AND Passwprd = ? ';

db.query(query,[UserName,password],callback);
};

export { login };