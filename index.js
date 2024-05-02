import express from "express";
import cors from "cors";
import mysql from "mysql";
import bodyParser from 'body-parser'

const app=express();

app.use(cors());
app.use(bodyParser.json());



app.get("/getData",(req,res)=>{
    res.send("Vidul");
});

app.post("/loginSystem",(req,res)=>{
    //console.log("form is submitted");

    const db=mysql.createConnection({
host:"localhost",
user:"root",
database:"sample",
password:""
});
    console.log(req.body);

    const { UserName, Password } = req.body;

    const query = 'SELECT * FROM login WHERE Name = ? AND Passwprd = ? '; // Replace your_table_name with the actual table name


    db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database.');
});

db.query(query,[UserName,Password],(err, results) => {
  if (err) {
    res.json({"message":{err}});
    return;
  }else if (results.length>0) {
    res.json({"message":"you can log in to the system"});
    //res.json(results);
    //res.json(rowData);
  } else {
    res.json({"message":"you can not log in to the system"});
  }
  console.log("Data retrieved from the table:", results);
});

db.end((err) => {
  if (err) {
    console.error('Error closing database connection:', err);
    return;
  }
  console.log('Database connection closed.');
});




});

///////////////////////////////////

app.post("/RegisterSystem",(req,res)=>{
    //console.log("form is submitted");

    const db=mysql.createConnection({
host:"localhost",
user:"root",
database:"sample",
password:""
});

    console.log(req.body);

    const { sid, name } = req.body;

    const query = 'INSERT INTO login (Name, Password) VALUES (?, ?)'; // Replace your_table_name with the actual table name


    db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database.');
});

db.query(query,[sid,name],(err, results) => {
  if (err) {
    res.json({"message":{err}});
    return;
  }
  res.json({"message":"you have registered"});
  
  console.log('Data retrieved from the table:', results);
});


db.end((err) => {
  if (err) {
    console.error('Error closing database connection:', err);
    return;
  }
  console.log('Database connection closed.');
});

});

//////////////////////////////////


// Connect to the database
/*db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database.');
});

// Query to select all data from a table
const query = 'SELECT * FROM login'; // Replace your_table_name with the actual table name

// Execute the query
db.query(query, (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Data retrieved from the table:', results);
});

// Close the database connection when done
db.end((err) => {
  if (err) {
    console.error('Error closing database connection:', err);
    return;
  }
  console.log('Database connection closed.');
});
*/
app.listen(3000,()=>console.log("backend is running"));