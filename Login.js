import express from 'express'
import db from '/db.js'

app.post("/loginSystem",(req,res)=>{
    //console.log("form is submitted");

    
    console.log(req.body);

    const { UserName, Password } = req.body;

    const query = 'SELECT * FROM login WHERE Name = ? AND Passwprd = ? '; // Replace your_table_name with the actual table name

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

})