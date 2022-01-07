const mongoose=require('mongoose')

const blogUserSchema = new mongoose.Schema({
    author:String,
    title:String,
    desc:String,  
    Time:{
        type:Date,
        default: new Date()
    }
})

const blogUser = new mongoose.model("blogUser",blogUserSchema)
module.exports=blogUser