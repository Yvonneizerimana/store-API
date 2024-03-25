const errorHandler=(req,res)=>{
    res.status(500).json({message:"internal server error"});
}

export default errorHandler;