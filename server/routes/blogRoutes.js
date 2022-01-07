const express =require('express');
const { addBlog, getBlogData, getBlogById, updateById, deleteById } = require('../controllers/blogController');
const router=express.Router()

router.get('/getblogdata',getBlogData)
router.post('/addblog', addBlog)
router.get('/getblog/:id',getBlogById)
router.patch('/updateblog/:id',updateById)
router.delete('/deleteblog/:id',deleteById)



module.exports=router;