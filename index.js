import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import AddBookRoute from "./Routes/AddBookRoute.js";
import LoginRoute from "./Routes/LoginRoute.js";

import LoadCatalogRoute from "./Routes/LoadCatalogRoute.js";
import LoadMembersRoute from "./Routes/LoadMembersRoute.js";
import OutStandingListRoute from "./Routes/OutStandingListRoute.js";

import EditProfileRoute from "./Routes/EditProfileRoute.js";
import getCatagoriesRoute from "./Routes/getCategoriesRoute.js";
import selectCopiesRoute from "./Routes/selectCopiesRoute.js";
import EditCopyRoute from "./Routes/EditCopyRoute.js";
import AddCopiesRoute from "./Routes/AddCopiesRoute.js";
import EditBookRoute from "./Routes/EditBookRoute.js";
import LoadStudentsRoute from "./Routes/LoadStudentsRoute.js";
import AddNewStudentRoute from "./Routes/AddNewStudentRoute.js";
import LoadNoticesRoute from "./Routes/LoadNoticesRoute.js";
import LoadPastPaperRoute from "./Routes/LoadPAstPapersRoute.js";
import AddNewTeacherRoute from "./Routes/AddNewTeacherRoute.js";
import LoadTeachersRoute from "./Routes/LoadTeachersRoute.js";
import LoadAdminsRoute from "./Routes/LoadAdminsRoute.js";
import AddNewAdminRoute from "./Routes/AddNewAdminRoute.js";
import AddTransactionRoute from "./Routes/AddTransactionRoute.js";
import SetTransactionRoute from "./Routes/SetTransactionRoute.js";
import LoadTransactionsRoute from "./Routes/LoadTransactionsRoute.js";
import ReturnTransactionRoute from "./Routes/ReturnTransactionRoute.js";
import EmailVerifyRoute from "./Routes/EmailVerifyRoute.js";
import AccountRegisterRoute from "./Routes/AccountRegisterRoute.js";
import AddNoticeRoute from "./Routes/AddNoticeRoute.js";
import QrCodeScanRoute from "./Routes/QrCodeScanRoute.js";
import ShortReportRoute from "./Routes/ShortReportRoute.js";
import AddPastPaperRoute from "./Routes/AddPastPaperRoute.js";
import GetLateReturnsRoute from "./Routes/GetLateReturnsRoute.js";
import LostBookRoute from "./Routes/LostBookRoute.js";
import LoadLostBooksRoute from "./Routes/LoadLoastBooksRoute.js";
import getWeeklyTransactionSummaryRoute from "./Routes/getWeeklyTransactionSummaryRoute.js";
import LoadDamageBooksRoute from "./Routes/LoadDamageBooksRoute.js";
import EditNoticeRoute from "./Routes/EditNoticeRoute.js";
import GenerateLastMonthUsageRouteRoute from "./Routes/GenerateLastMonthUsageRoute.js";
import DamageBookRoute from "./Routes/DamageBookRoute.js";


const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(AddBookRoute);
app.use(LoginRoute);
app.use(LoadCatalogRoute);
app.use(LoadMembersRoute);

app.use(OutStandingListRoute);

app.use(EditProfileRoute);
app.use(getCatagoriesRoute);
app.use(selectCopiesRoute);
app.use(EditCopyRoute);
app.use(AddCopiesRoute);
app.use(EditBookRoute);
app.use(LoadStudentsRoute);
app.use(AddNewStudentRoute);
app.use(LoadNoticesRoute);
app.use(LoadPastPaperRoute);
app.use(AddNewTeacherRoute);
app.use(LoadTeachersRoute);
app.use(LoadAdminsRoute);
app.use(AddNewAdminRoute);
app.use(AddTransactionRoute);
app.use(SetTransactionRoute);
app.use(LoadTransactionsRoute); 
app.use(ReturnTransactionRoute);
app.use(EmailVerifyRoute); 
app.use(AccountRegisterRoute);
app.use(AddNoticeRoute);
app.use(QrCodeScanRoute);
app.use(ShortReportRoute);
app.use(AddPastPaperRoute);
app.use(GetLateReturnsRoute);
app.use(LostBookRoute);
app.use(LoadLostBooksRoute);
app.use(getWeeklyTransactionSummaryRoute);
app.use(LoadDamageBooksRoute);
app.use(EditProfileRoute);
app.use(EditNoticeRoute);
app.use(GenerateLastMonthUsageRouteRoute);
app.use(DamageBookRoute);

app.listen(3000,()=>console.log("backend is running"));
