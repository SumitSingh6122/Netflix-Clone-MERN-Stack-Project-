import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from "./userRoute.js";
import bodyParser from "body-parser";
import connectToDatabase from "./database.js";
import cors from "cors";


connectToDatabase();
dotenv.config({
    path:".env"
})
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOption={
    origin:'https://netflix-clone-mern-stack.netlify.app/',
    credentials:true
}
app.use(cors(corsOption));

app.use("/api/v1/user",userRoute);
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send("Internal Server Error");
});


app.listen(process.env.PORT,()=>{
    console.log(`server is running  on ${process.env.PORT}`);
});