import db from '../db.js'

class catalogController{
    static async loadCatalog(req, res) {

  const query = 'SELECT * FROM login'; // Replace your_table_name with the actual table name
    db.query(query,(err, results) => {
  if (err) {
    res.json({"message":{err}});
    return;
  }else if (results.length>0) {
    //const age = jsonResponse.results[0].Age;
    res.json({results});
    
  } else {
    res.json({"message":"you can not log in to the system"});
  }
  console.log("Data retrieved from the table:", results);
});
/*
db.end((err) => {
  if (err) {
    console.error('Error closing database connection:', err);
    return;
  }
  console.log('Database connection closed.');
});
*/
}
    }

export default catalogController