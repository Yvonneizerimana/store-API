

import productSchema from "../model/product.model.js";
 const controllers={
 
 getAllProducts:async(req,res)=>{
    try{
const products=await productSchema.find({featured:true});
          res.status(200).json({
            message:"get all products",
            productsAmount: products.length,
            storeProducts: products
        });
    }
    catch(error){
        res.status(500).json({message:"internal server error"});
    }
},


getAllProductsStatic:async(req,res)=>{
    try{
        // const search="j"
        // const products=await productSchema.find({name:{$regex:search,$options:"i"},});
        const products=await productSchema.find({}).sort("name").select("name price").limit(5).skip(1);
                  res.status(200).json({
                    message:"get all products by query",
                    productsAmount: products.length,
                    storeProducts: products
                });

                
            }
            catch(error){
                console.log(error.message)
                res.status(500).json({message:"internal server error"});
            }
}

 }
export default  controllers