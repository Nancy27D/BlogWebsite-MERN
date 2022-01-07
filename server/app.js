const express=require('express')
const cors=require('cors')
const app=express()
const authRoutes=require("./routes/authRoutes")
const { centralErrorHandler } = require('./controllers/errController')
const blogRoutes=require("./routes/blogRoutes")
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.use("/api",authRoutes)

app.use('/api/blog',blogRoutes)
app.use(centralErrorHandler)


module.exports=app;