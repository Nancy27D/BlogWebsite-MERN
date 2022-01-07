const authUser = require("../models/authModel");
const { genrateJwt } = require("../utils/auth");

exports.signup= async (req,res)=>{
    try {
        const getData = await authUser.find();
        const username = getData.map((ele) => ele.username);
console.log(username)
        if(!username.includes(req.body.username)){
            const data= await authUser.create(req.body)
            res.json({msg:"SignUp Successfull", data:data})
        }else{
            res.json({msg:"UserName is not available!! Use Diff username"})
        }
    } catch (error) {
        console.log(error);
    }
}


exports.login= async(req,res,next)=>{
    try {
        const data= await authUser.findOne({username:req.body.username})
        if(!data) throw new Error("Username is not found, Sign up please")

        const password= await data.correctPassword(req.body.password,data.password)
        if(!password) throw new Error("Incorrect Password")
       
        const token = genrateJwt(JSON.parse(JSON.stringify(data)))
        res.json({msg:"Login SuccessFull!!",token:token})
    } catch (error) {
        next(error)
    }
   
}

//GET ALL DATA
exports.getUsers = async (req, res) => {
    try {
      const userdata = await authUser.find();
      res.status(201).json(userdata);
      console.log(userdata); 
    } catch (error) {
      res.status(422).json(error);
    }
  };