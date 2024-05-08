import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import AddBookRoute from "./Routes/AddBookRoute.js";
import LoginRoute from "./Routes/LoginRoute.js";
import AddMemberRoute from "./Routes/AddMemberRoute.js";
import LoadCatalogRoute from "./Routes/LoadCatalogRoute.js";
import LoadMembersRoute from "./Routes/LoadMembersRoute.js";
import UserDataRoute from "./Routes/UserDataRoute.js";

const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(AddBookRoute);
app.use(LoginRoute);
app.use(AddMemberRoute);
app.use(LoadCatalogRoute);
app.use(LoadMembersRoute);
app.use(UserDataRoute);

app.listen(3000,()=>console.log("backend is running"));
