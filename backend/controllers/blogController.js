import React from "react";
import blog from "../models/Blog.js";
import fs from "fs";
import imagekit from "../configs/imageKit.js";
import { json } from "stream/consumers";
import comment from "../models/commemt.js";

export const blogController = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );
    const imageFile = req.file;

    if (!title || !description || !category || !isPublished) {
      return res.json({
        success: false,
        message: "all fields shuld required",
      });
    }
    console.log(imageFile);

    const fileBuffer = fs.readFileSync(imageFile.path);

    //upload image to imagekit
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blog",
    });

    //optimize through imagekit url transformation
    const imageURL = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" }, //converting to modern formet
        {
          width: "1280",
        },
      ],
    });

    const image = imageURL;
    await blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });

    res.json({
      message: "blog added successfully",
      success: true,
    });
  } catch (error) {
    res.json({
      message: "something went wrong in blog",
      success: false,
      error: error.message,
    });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blog.find({ isPublished: true });
    return res.json({
      success: true,
      blogs,
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const singleBlog = await blog.findById(id);
    return res.json({
      message: "blog founded by id",
      singleBlog,
    });
  } catch (error) {
    return res.json({
      message: error.message,
      success: false,
    });
  }
};

export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.body;
    await blog.findByIdAndDelete(id);
    return res.json({
      message: "blog was deleted",
      success:true
    });
  } catch (error) {
    return res.json({
      message: error.message,
      success: false,
    });
  }
};

export const togglePublish = async(req,res) =>{
  try {
    const {id} = req.body;
    const sblog = await blog.findById(id);
    sblog.isPublished = !sblog.isPublished;
    await blog.save();
    return res.json({
      message: "ispublished was updeted",
      success:true
    })

  } catch (error) {
    return res.json({
      message: error.message,
      success: false,
    });
  }
}

export const addComment = async(req,res) => {
  try {
    const {blog,name,content} = req.body;
    await comment.create({blog,name,content});
    return res.json({
      message: "comment added for review",
      success: true,
    });

  } catch (error) {
    return res.json({
      message: error.message,
      success: false,
    });
  }
}

export const getBlogComment =async(req,res) =>{
  try {
    const {id} = req.body;
    const scomment = await comment.find({blog:id, isApproved:true}).sort({createdAt:-1});
  } catch (error) {
    return res.json({
      message: error.message,
      success: false,
    });
  }
}

