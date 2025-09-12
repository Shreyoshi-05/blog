import jwt from 'jsonwebtoken';
import blog from '../models/Blog.js';
import comment from '../models/commemt.js';

export const adminControllers = async(req,res) => {
  try {
    const {email,pass} = req.body;

    if(email != process.env.EMAIL || pass != process.env.PASS){
      return res.json({
        "message":"invalid credentials",
        "success":"false"
      })
    }
    const token = jwt.sign({email},process.env.JWT_TOKEN);
    res.json({
      "success":true,
      token,
    })

  } catch (error) {
    res.json({
      "success":false,
      "message":error.message
    })
  }
}

export const getAllAdminBlog = async(req,res) =>{
  try {
    const blogs = await blog.find({}).sort({createdAt:-1});
    return res.json({
      success:true,
      blogs
    })
  } catch (error) {
    res.json({
      "success":false,
      "message":error.message
    })
  }
}

export const getAllComment = async(req,res) =>{
  try {
    const adminComments =await comment.find({}).populate("blog").sort({createdAt:-1})
    return res.json({
      success:true,
      adminComments
    })
  } catch (error) {
    res.json({
      "success":false,
      "message":error.message
    })
  }
}

export const getDashBord = async(req,res)=>{
  try {
    const recentblog = await blog.find({}).sort({createdAt:-1}).limit(5);
    const blogs = await blog.countDocuments();
    const cmments  =await comment.countDocuments();
    const druft = await blog.countDocuments({isPublished:false});
    const dashbordData = {recentblog,blogs,cmments,druft};
    return  res.json({
      "success":"true",
      dashbordData,
    })
  } catch (error) {
    res.json({
      "success":false,
      "message":error.message
    })
  }
}

export const deleteCommentById =async(req,res) => {
  try {
    const {id} = req.body;
    await comment.findByIdAndDelete(id);
    await comment.deleteMany({blog:id})

    res.json({
      "message":"comment was deleted",
      "success":true
      
    })
  } catch (error) {
    res.json({
      "success":true,
      "message":error.message
    })
  }
}

export const approveCommentById =async(req,res) => {
  try {
    const {id} = req.body;
    await comment.findByIdAndUpdate(id,{isApproved:true});
    res.json({
      "message":"comment was approved successfully",
      "success":true
      
    })
  } catch (error) {
    res.json({
      "success":false,
      "message":error.message
    })
  }
}

