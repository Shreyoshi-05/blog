import React from "react";
import { FaTachometerAlt, FaPlus, FaList, FaComments } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";

const Admin = () => {
  const location = useLocation();

  return (
    <div className="flex">
      {/* Sidebar (fixed, non-scrollable) */}
      <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] lg:w-56 bg-white shadow-md border-r border-gray-200">
        <div className="flex flex-col pt-20">
          <Link
            to="/admin"
            style={{ padding: "1.1rem 2rem" }}
            className={`flex items-center gap-3 px-6 py-3 cursor-pointer border-r-4 transition
              ${
                location.pathname === "/admin"
                  ? "bg-purple-100 border-purple-500"
                  : "hover:bg-purple-100 border-transparent hover:border-purple-500"
              }`}
          >
            <FaTachometerAlt className="text-gray-600 " />
            <span className="text-gray-700 font-medium hidden lg:inline">Dashboard</span>
          </Link>

          <Link
            style={{ padding: "1.1rem 2rem" }}
            to="addBlog"
            className={`flex items-center gap-3 px-6 py-3 cursor-pointer border-r-4 transition
              ${
                location.pathname === "/admin/addBlog"
                  ? "bg-purple-100 border-purple-500"
                  : "hover:bg-purple-100 border-transparent hover:border-purple-500"
              }`}
          >
            <FaPlus className="text-gray-600" />
            <span className="text-gray-700 font-medium hidden lg:inline">Add blogs</span>
          </Link>

          <Link
            style={{ padding: "1.1rem 2rem" }}
            to="listBlog"
            className={`flex items-center gap-3 px-6 py-3 cursor-pointer border-r-4 transition
              ${
                location.pathname === "/admin/listBlog"
                  ? "bg-purple-100 border-purple-500"
                  : "hover:bg-purple-100 border-transparent hover:border-purple-500"
              }`}
          >
            <FaList className="text-gray-600" />
            <span className="text-gray-700 font-medium hidden lg:inline">Blog lists</span>
          </Link>

          <Link
            style={{ padding: "1.1rem 2rem" }}
            to="comments"
            className={`flex items-center gap-3 px-6 py-3 cursor-pointer border-r-4 transition
              ${
                location.pathname === "/admin/comments"
                  ? "bg-purple-100 border-purple-500"
                  : "hover:bg-purple-100 border-transparent hover:border-purple-500"
              }`}
          >
            <FaComments className="text-gray-600" />
            <span className="text-gray-700 font-medium hidden lg:inline">Comments</span>
          </Link>
        </div>
      </div>

      {/* Main Content (scrollable) */}
      <div className="ml-56 flex-1 h-[calc(100vh-4rem)] overflow-y-auto bg-gray-50 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
