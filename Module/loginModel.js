import db from '../db2.js';

const login = (UserName,password, callback) => {
    const query = 'SELECT * FROM user WHERE UserName = ? AND Password = ? ';

db.query(query,[UserName,password],callback);
};

const getAdminId = (UserName,password, callback) => {
    const query = 'SELECT user.*, admin.* FROM user Inner JOIN admin ON user.UserId = admin.UserId WHERE user.UserName = ? AND user.Password = ?';

db.query(query,[UserName,password],callback);
};

export { login,getAdminId };