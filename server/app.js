import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { configDotenv } from 'dotenv';


const app = express();
configDotenv({
    path:"./.env"
});

app.use(
    cors({
        origin:process.env.FRONTEND_URL,
        method: ["GET", "POST", "DELETE", "PUT"],
        credentials:true
    })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/pong',(req, res)=>{
    res.send("this is pong function");
})

app.use("*",(req, res)=>{
    res.status(400).json("OPPS !!!! Something went wrong");
})

export default app;
