//modal for login

import db from '../db2.js';



const login = (UserName,password, callback) => {

    const query = 'SELECT * FROM user WHERE UserName = ? AND Password = ? '; //query for check user name and password

    db.query(query,[UserName,password],callback);
};





const getAdminId = (UserName,password, callback) => {

    const query = 'SELECT user.*, admin.* FROM user Inner JOIN admin ON user.UserId = admin.UserId WHERE user.UserName = ? AND user.Password = ?'; //query for get the admin id related to the user name and password

    db.query(query,[UserName,password],callback);
};

export { login,getAdminId };