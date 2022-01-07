const blogUser = require("../models/blogModel")

//GET ALL blog
exports.getBlogData= async(req,res)=>{
    try {
        const data= await blogUser.find()
        res.json({msg:" SuccessFully get all Blog Data!!",data:data})
    } catch (error) {
        console.log(error);
    }
}
//ADDING BLOG
exports.addBlog= async(req,res)=>{
    try {
            const data=await blogUser.create(req.body)
            res.json({msg:"Data Added",data:data})
            // res.send("success")
        } catch (error) {
            console.log(error);
        }
}
//GET individual blog
exports.getBlogById= async(req,res)=>{
    try {
        const data= await blogUser.findById({_id:req.params.id})
        res.json(data)
    } catch (error) {
        res.status(422).json(error);
    }
}
//Update Blog data
exports.updateById=async(req,res)=>{
    try {
        console.log(req.body)
            const query = {};
            for (i in req.body) {
              // console.log('for in loop',req.body[i],i)
              if (req.body[i]) {
                query[i] = req.body[i];
              }
            }
            const data= await blogUser.updateOne({_id:req.body._id},{$set:query})
        
            res.json({msg:"update Record by id", data:data})
        
        } catch (error) {
        
        }
}

exports.deleteById=async(req,res)=>{
    try {
        const data= await blogUser.deleteOne({_id:req.params.id})
        res.json({msg:"Blog deleted successfully !",data:data})
    } catch (error) {
        res.status(422).json(error);
    }
}


//updateBlog
// const blog = req.body; //put api se data Obj
// const editblog = new blogUser(blog); //chck model valid obj
// try {
//   await User.updateOne({ _id: req.params.id }, editblog);
//   res.json(editblog);
// } catch (error) {
//   res.status(422).json(error);
// }