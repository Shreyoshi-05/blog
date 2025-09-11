import express from "express"
import { adminControllers, approveCommentById, deleteCommentById, getAllAdminBlog, getAllComment, getDashBord } from "../controllers/adminControllers.js";
import auth from "../middleware/auth.js";


const adminRouter = express.Router();

adminRouter.post("/login",adminControllers);
adminRouter.get("/blogs",auth,getAllAdminBlog);
adminRouter.get("/comments",auth,getAllComment);
adminRouter.get("/dashbord",auth,getDashBord);
adminRouter.get("/delete-comment",auth,deleteCommentById);
adminRouter.get("/approve-comment",auth,approveCommentById);

export default adminRouter;