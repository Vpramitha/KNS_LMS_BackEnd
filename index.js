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
import LogoutRoute from "./Routes/logout.route.js";
import EditProfileRoute from "./Routes/EditProfileRoute.js";
import getCatagoriesRoute from "./Routes/getCategoriesRoute.js";
import selectCopiesRoute from "./Routes/selectCopiesRoute.js";
import EditCopyRoute from "./Routes/EditCopyRoute.js";
import AddCopiesRoute from "./Routes/AddCopiesRoute.js";
import EditBookRoute from "./Routes/EditBookRoute.js";
import LoadStudentsRoute from "./Routes/LoadStudentsRoute.js";
import AddNewStudentRoute from "./Routes/AddNewStudentRoute.js";
import LoadNoticesRoute from "./Routes/LoadNoticesRoute.js";

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
app.use(LogoutRoute);
app.use(EditProfileRoute);
app.use(getCatagoriesRoute);
app.use(selectCopiesRoute);
app.use(EditCopyRoute);
app.use(AddCopiesRoute);
app.use(EditBookRoute);
app.use(LoadStudentsRoute);
app.use(AddNewStudentRoute);
app.use(LoadNoticesRoute);

app.listen(3000,()=>console.log("backend is running"));
