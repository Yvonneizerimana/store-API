import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

//async error
import express from "express";
const app=express();
app.use(express.json());

import errorHandler from "./middleware/errorHandler.js";
import router from "./routes/routes.js";
import notFound from "./middleware/notFound.js";

app.use(express.json());

//databse connection
const url=process.env.MONGO_URI || "mongodb://localhost:27017/store"
mongoose.connect(url)
.then(()=>{

    //create route
    app.use("/api/store",router)
    app.use(notFound);
app.use(errorHandler);
})
.catch((error)=>{
    console.log(error.message);
});

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is starting on port ${PORT}....`);
})



