import express from "express";
import cors from "cors";
//import mysql from "mysql";
import bodyParser from 'body-parser'
import AddBookRoute from "./Routes/AddBookRoute.js";
import LoginRoute from "./Routes/LoginRoute.js";
import AddMemberRoute from "./Routes/AddMemberRoute.js";
import LoadCatalogRoute from "./Routes/LoadCatalogRoute.js";

const app=express();

app.use(cors());
app.use(bodyParser.json());

/*Close the database connection when done
db.end((err) => {
  if (err) {
    console.error('Error closing database connection:', err);
    return;
  }
  console.log('Database connection closed.');
});*/

app.use(AddBookRoute);
app.use(LoginRoute);
app.use(AddMemberRoute);
app.use(LoadCatalogRoute);
app.listen(3000,()=>console.log("backend is running"));
