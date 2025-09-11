import express from 'express'
import { addComment, blogController, deleteBlogById, getAllBlogs, getBlogById, getBlogComment, togglePublish } from '../controllers/blogController.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';


const blogRouter = express.Router();

blogRouter.post("/add",auth,upload.single("image"),blogController)
blogRouter.get("/all",getAllBlogs);
blogRouter.get("/:id",getBlogById);
blogRouter.post("/delete",auth,deleteBlogById);
blogRouter.post("/toggle-published",auth,togglePublish);

blogRouter.post("/add-comment",addComment);
blogRouter.post("/comments",getBlogComment);

export default blogRouter