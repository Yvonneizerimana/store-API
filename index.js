import dotenv from "dotenv";
dotenv.config();

//async error
import express from "express";
const app=express();
app.use(express.json());

import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";
app.use(notFound);
app.use(errorHandler);


app.get("/home",(req,res)=>{
    res.send(200).json({message:"Your welcome"});
});


const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is starting on port ${PORT}....`);
})



