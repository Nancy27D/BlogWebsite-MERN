exports.centralErrorHandler= async(err,req,res,next)=>{

    res.json({message:"Error Occures",data:err.message})
    
    }