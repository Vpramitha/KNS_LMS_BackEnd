import db from '../db.js';

const editProfile = (Id, UserName, Password, Age, callback) => {
    const query = 'UPDATE login SET Name = ?, Passwprd = ?, Age = ? WHERE id = ?';

    db.query(query, [UserName, Password, Age, Id], callback);
};

export { editProfile };
