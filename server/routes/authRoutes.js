const express=require("express")
const { getUsers, signup, login } = require("../controllers/authController")
const { middlewareAuthentication, authorization } = require("../middlewares")
const router=express.Router()



router.post("/signup",middlewareAuthentication,signup)
router.post("/login",login)

//authorization /prevent
// router.use(authorization)
router.post("/all",getUsers)

module.exports= router