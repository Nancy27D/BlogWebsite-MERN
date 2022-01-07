const mongoose =require("mongoose")
const bcrypt=require('bcrypt')

const authUserSchema= new mongoose.Schema({
    username:String,
    name:String,
    email:String,
    password:String,
  
})
// pre hook / Instance method
authUserSchema.methods.correctPassword = async (typedPassword,originalPassword)=>{
    return await bcrypt.compare(typedPassword,originalPassword)
}

const authUser= new mongoose.model("authUser",authUserSchema)
module.exports =authUser