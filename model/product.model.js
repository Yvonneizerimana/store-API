import mongoose from "mongoose";

const productModel=new mongoose.Schema({
    name:{
        type:String,
        required:[true, "product name must be provided"]
    },
    price:{
        type:Number,
        required:[true, "product price must be provided"]
    },
    available:{
        type:Boolean,
        default:false
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
    company:{
        type:String,
        required:[true, "company name must be provided"],
        enum:{
            values:["Apple","Google","Microsoft"],
            message:`{VALUE} is not supported for this product`
        }
    }
})
export default mongoose.model ("Product",productModel)