import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"
import express from "express"
const app= express()

import storeSchema from "./model/product.model.js"
import productJson from "./product.json" assert{type:"json"}

app.use(express.json())

const url=process.env.MONGO_URI || "mongodb://localhost:27017/store"
mongoose.connect(url)
.then(()=>{
    addJsonData()
})
.catch((error=>{
    console.log(error.message);
}));

    const addJsonData=(async()=>{
        try{
            await storeSchema.deleteMany();
            await storeSchema.create(productJson);
            console.log("JsonData added to the database");
            process.exit(0);
        }
        catch(error){
            console.log(error.message);
           process.exit(1);
        }
    })
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is starting on port ${PORT}....`);
})



