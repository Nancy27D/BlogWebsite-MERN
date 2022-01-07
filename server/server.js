require("dotenv").config()
const mongoose=require('mongoose')
const port=process.env.PORT
const DB=process.env.DB
const app=require('./app')


mongoose.connect(DB).then(data=>{
    console.log("conneted to db");
    app.listen(port,()=>{
        console.log(`server runing at PORT ${port}`);
    })

})