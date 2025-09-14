import React, { useEffect, useState } from "react";
import { UseAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import Loding from "../Loding";

const DashBord = () => {
  const { axios, token } = UseAppContext();
  const [blogs, setBlogs] = useState([]);
  const [numbers,setNumbers] = useState();

  async function getAllBlocks() {
    try {
      const blogs = await axios.get(`api/blog/all`);
      console.log(blogs.data.blogs);
      if (blogs) {
        setBlogs(blogs.data.blogs);
      }
    } catch (error) {
      toast(error.message);
    }
  }

  async function getNumbers() {
    try {
      // const{recentblog,blogs,cmments,druft} = 
      const data = await axios.get('api/admin/dashbord',{
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      console.log(data.data.dashbordData);
      if(data){
        setNumbers(data.data.dashbordData)
      }
    } catch (error) {
      toast(error.message);
    }
  }
  useEffect(() => {
    getAllBlocks();
    getNumbers();
  }, []);

  if (!blogs) {
    return <Loding />;
  }

  return (
    <div
      className="w-full flex justify-center"
      style={{
        padding: "2rem",
        marginLeft: "100px", // shift to the right so sidebar doesn’t overlap
      }}
    >
      <div className="w-full max-w-6xl">
        {/* Top Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ marginBottom: "2rem" }}
        >
          <div
            className="bg-white shadow rounded-lg flex items-center gap-4"
            style={{ padding: "1.5rem" }}
          >
            <div className="text-purple-500 text-3xl">
              <i className="fas fa-blog"></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold">{numbers?.blogs || 0}</h3>
              <p className="text-gray-500">Blogs</p>
            </div>
          </div>

          <div
            className="bg-white shadow rounded-lg flex items-center gap-4"
            style={{ padding: "1.5rem" }}
          >
            <div className="text-blue-500 text-3xl">
              <i className="fas fa-comments"></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold">{numbers?.cmments || 0}</h3>
              <p className="text-gray-500">Comments</p>
            </div>
          </div>

          <div
            className="bg-white shadow rounded-lg flex items-center gap-4"
            style={{ padding: "1.5rem" }}
          >
            <div className="text-indigo-500 text-3xl">
              <i className="fas fa-file-alt"></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold">{numbers?.druft || 0}</h3>
              <p className="text-gray-500">Drafts</p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div
          className="bg-white rounded-lg shadow-md"
          style={{ padding: "1.5rem" }}
        >
          <h2 className="text-lg font-semibold mb-4">Latest Blogs</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    className="text-left text-sm font-medium text-gray-500"
                    style={{ padding: "1rem 1.5rem" }}
                  >
                    #
                  </th>
                  <th
                    className="text-left text-sm font-medium text-gray-500"
                    style={{ padding: "1rem 1.5rem" }}
                  >
                    BLOG TITLE
                  </th>
                  <th
                    className="text-left text-sm font-medium text-gray-500"
                    style={{ padding: "1rem 1.5rem" }}
                  >
                    DATE
                  </th>
                  <th
                    className="text-left text-sm font-medium text-gray-500"
                    style={{ padding: "1rem 1.5rem" }}
                  >
                    STATUS
                  </th>
                  <th
                    className="text-left text-sm font-medium text-gray-500"
                    style={{ padding: "1rem 1.5rem" }}
                  >
                    ACTIONS
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {blogs.map((blog, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td
                      style={{ padding: ".75rem 1.5rem" }}
                      className="text-sm text-gray-700"
                    >
                      {idx+1}
                    </td>
                    <td
                      style={{ padding: ".75rem 1.5rem" }}
                      className="text-sm text-gray-700"
                    >
                      {blog.title}
                    </td>
                    <td
                      style={{ padding: ".75rem 1.5rem" }}
                      className="text-sm text-gray-700"
                    >
                      {blog.updatedAt}
                    </td>
                    <td
                      style={{ padding: ".75rem 1.5rem" }}
                      className="text-sm text-green-600 font-medium"
                    >
                      {blog.isPublished?"published":"unpublished"}
                    </td>
                    <td
                      style={{ padding: ".75rem 1.5rem" }}
                      className="flex flex-wrap gap-2"
                    >
                      <button className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300">
                        Unpublish
                      </button>
                      <button className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200">
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBord;
