
import db from '../db2.js';

const addBook = (ISBN, Title, Author,Publisher,CategoryId,Description,NumberOfPages,Price_Rs,NumberOfCopies, callback) => {
    const query = "INSERT INTO bookprofile (ISBN, Title, Author,Publisher,CategoryId,Description,NumberOfPages,Price_Rs,NumberOfCopies) VALUES (?, ?, ?,?,?,?,?,?,?)";
    db.query(query, [ISBN, Title, Author,Publisher,CategoryId,Description,NumberOfPages,Price_Rs,NumberOfCopies], callback);
};

const addCopies = (ISBN, NumberOfCopies) => {
            for (let i = 0; i < NumberOfCopies; i++) {
                const query2 = "INSERT INTO resources (ISBN,CopyNumber) VALUES (?, ?)";
                db.query(query2, [ISBN,i++], (error, result) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(result);
                    }
                });}
};

export { addBook,addCopies };
