import React from "react";
import {Link} from "react-router-dom";

const Cards = ({ blog }) => {
  return (
    <Link
      to={`/${blog._id}`}
      className="card bg-base-100 shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
    >
      <figure>
        <img
          src={blog.image || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
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
            className="badge  text-sm font-medium text-[rgb(123,44,191)] shadow-md border border-[#7b2cbf] rounded-2xl badge-outline"
          >
            {blog.category}✨
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
