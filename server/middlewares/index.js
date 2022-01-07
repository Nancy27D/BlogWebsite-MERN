const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

exports.middlewareAuthentication = (req,res,next)=>{
    console.log(req.body);
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            // Store hash in your password DB.
            req.body.password = hash
            next()
        });
    });


}
//allUser
exports.authorization=async(req,res,next)=>{
    try {
        const key= process.env.SECRET_KEY
        if(!req.header.authorization) throw new error("Missing auth token")
        await jwt.verify(req.header.authorization, key)
        next();
    } catch (error) {
        next(error)
    }
}