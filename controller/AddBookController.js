import db from '../db.js';

const AddBookController = (req, res) => {
    const { Title, Author, Price } = req.body;
    console.log(Title,Author,Price+"the request")

    const query = "INSERT INTO book (Title, Author, Price) VALUES (?, ?, ?)";
    db.query(query, [Title, Author, Price], (err, results) => {
        if (err) {
            res.json({ message: err });
            
            return;
        } else {
            console.log(results);
            res.json({ message: "Book added successfully" });
        }
    });
};

export default AddBookController;