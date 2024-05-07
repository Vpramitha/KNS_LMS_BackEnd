import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import AddBookRoute from "./Routes/AddBookRoute.js";
import LoginRoute from "./Routes/LoginRoute.js";
import AddMemberRoute from "./Routes/AddMemberRoute.js";
import LoadCatalogRoute from "./Routes/LoadCatalogRoute.js";
import LoadMembersRoute from "./Routes/LoadMembersRoute.js";

const app=express();

app.use(cors());
app.use(bodyParser.json());

app.use(AddBookRoute);
app.use(LoginRoute);
app.use(AddMemberRoute);
app.use(LoadCatalogRoute);
app.use(LoadMembersRoute);

app.listen(3000,()=>console.log("backend is running"));
