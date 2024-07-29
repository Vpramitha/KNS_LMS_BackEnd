import db from '../db2.js';

const EditBook = (Title, Author, Publisher, Description, NumberOfPages, Price_Rs, NumberOfCopies,ISBN,CategoryId,  callback) => {
    const query = "UPDATE bookprofile SET Title = ?, Author = ?, Publisher = ?, Description = ?, NumberOfPages = ?, Price_Rs = ?, NumberOfCopies = ?,CategoryId = ? WHERE ISBN = ?;"


    db.query(query, [Title, Author, Publisher, Description, NumberOfPages, Price_Rs, NumberOfCopies,CategoryId, ISBN], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            callback(err, null);
            return;
        }
        callback(null, result);
    });
};

export { EditBook };

