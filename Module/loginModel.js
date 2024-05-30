import db from '../db2.js';

const login = (UserName,password, callback) => {
    const query = 'SELECT * FROM user WHERE UserName = ? AND Password = ? ';

db.query(query,[UserName,password],callback);
};

export { login };