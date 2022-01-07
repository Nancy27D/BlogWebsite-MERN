const jwt =require('jsonwebtoken');

const key= process.env.SECRET_KEY
exports.genrateJwt=(payload)=>{
    const token=jwt.sign(payload,key)
    return token
}
