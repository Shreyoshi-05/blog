import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../home/Nav";
import toast from "react-hot-toast";
import { UseAppContext } from "../../context/AppContext";
import Comment from "./Comment";
import { months } from "./month";
import Loding from "../Loding";

const Blog = () => {
  const [singleBlog, setSingleBlog] = useState(null);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const { id } = useParams();
  const { axios } = UseAppContext();
  let date = new Date();

  // console.log(id)

  async function getBlogData() {
    try {
      const blog = await axios.get(`api/blog/${id}`);
      if (blog) {
        setSingleBlog(blog.data.singleBlog);
      } else {
        toast.error(blog.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    getBlogData();
  }, []);

  async function hendelAdd(e) {
    e.preventDefault();

    try {
      const {data} = await axios.post(`api/blog/add-comment`,{blog:id,name,content})
      if(data.success){
        toast.success(data.message);
        setContent("");
        setName("")
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  // console.log(singleBlog);

  if (singleBlog == null) {
    return <Loding />;
  }

  return (
    <div
      style={{ margin: "3rem auto" }}
      className="w-[80%] flex items-center justify-center md:w-[70%] lg:w-[50%]"
    >
      <div class=" flex flex-col gap-8 w-full items-center justify-center">
        <p className="text-[#7b2cbf] font-bold">
          Published on {date.getDate()} {months[date.getMonth()]}{" "}
          {date.getFullYear()}
        </p>
        <h1 class="text-4xl md:text-5xl font-bold text-center leading-tight">
          {singleBlog.title}
        </h1>
        <p class="mt-4 max-w-xl text-center text-gray-400">
          {singleBlog.subTitle}
        </p>
        <div class="mb-6">
          <span
            style={{ padding: "0.7rem 4rem" }}
            class="px-4 py-1 rounded-full bg-[#fae9fd] text-sm font-medium text-[rgb(123,44,191)] shadow-md border border-[#7b2cbf]"
          >
            New: AI feature integrated ✨
          </span>
        </div>
        <img
          style={{ margin: "3rem 0" }}
          className="w-full max-h-[25rem] object-cover rounded-2xl shadow-lg my-12"
          src={singleBlog.image}
          alt="pic"
        />
        <p className="text-center text-gray-500">{singleBlog.description}</p>

        {/* comment section */}

        <div className="w-[100%]">
          <h2 class="text-2xl font-bold mb-4">Leave a Comment</h2>
          <form onSubmit={hendelAdd} class="flex flex-col w-full gap-4 p-5 rounded-lg ">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              style={{ padding: "1rem", marginTop: "2rem" }}
              placeholder="Your Name"
              class="p-2 border border-gray-400 shadow-md rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Your Comment"
              style={{ padding: "1rem" }}
              rows="5"
              class="p-2 border border-gray-400 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>

            <button
              style={{ padding: "1rem" }}
              type="submit"
              class="bg-purple-700 font-bold text-white py-2 rounded hover:bg-purple-800 transition"
              
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;
