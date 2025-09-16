import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Cards = ({ blog }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}   // start a little lower and invisible
      animate={{ y: 0, opacity: 1 }}    // move up and fade in
      transition={{ duration: 0.8, ease: "easeOut" }} // smooth animation
    >
      <Link
        to={`/${blog._id}`}
        className="card bg-base-100 shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
      >
        <figure>
          <img
            src={
              blog.image ||
              "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            }
            alt={blog.title}
            className="w-full h-48 object-cover"
          />
        </figure>
        <div style={{ padding: "1.5rem 1rem" }} className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <p>{blog.description.slice(0, 80)}...</p>
          <div className="card-actions justify-end">
            <div
              style={{ padding: "1rem 1.2rem" }}
              className="badge text-sm font-medium text-[rgb(123,44,191)] shadow-md border border-[#7b2cbf] rounded-2xl badge-outline"
            >
              {blog.category}✨
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Cards;
