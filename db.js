import mysql from 'mysql'

const db=mysql.createConnection({
host:"localhost",
user:"root",
database:"sample",
password:""
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database.');
});

export default db