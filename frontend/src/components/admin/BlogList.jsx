import React, { useEffect, useState } from "react";
import { UseAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import Loding from "../Loding";
import { months } from "../bolg/month";

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: "A detailed step by step guide to manage your lifestyle",
      date: "Mon Apr 21 2025",
      status: "Published",
    },
    {
      id: 2,
      title: "How to create an effective startup roadmap or ideas",
      date: "Mon Apr 21 2025",
      status: "Published",
    },
    {
      id: 3,
      title: "Learning new technology to boost your career in software",
      date: "Mon Apr 21 2025",
      status: "Published",
    },
    {
      id: 4,
      title: "Tips for getting the most out of apps and software",
      date: "Mon Apr 21 2025",
      status: "Published",
    },
    {
      id: 5,
      title: "Enhancing your skills and capturing memorable moments",
      date: "Mon Apr 21 2025",
      status: "Published",
    },
    {
      id: 6,
      title: "Maximizing returns by minimizing resources in your startup",
      date: "Mon Apr 21 2025",
      status: "Published",
    },
    {
      id: 7,
      title: "Taxes on Luxury Houses",
      date: "Mon Apr 21 2025",
      status: "Published",
    },
  ];

  const [data, setData] = useState();
  const { axios, token } = UseAppContext();

  async function getAllAdminBlog() {
    try {
      const res = await axios.get(`api/admin/blogs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        setData(res.data.blogs);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    getAllAdminBlog();
  }, []);
  console.log(data);

  if (!data) {
    return <Loding />;
  }

  return (
    <div className="flex items-center justify-center">
      <div
        style={{ marginTop: "2rem" }}
        className="bg-white rounded-lg shadow-md"
      >
        {/* Heading */}
        <h2
          style={{ margin: "1rem 2rem" }}
          className="text-lg font-semibold px-6 py-4"
        >
          All blogs
        </h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  style={{ padding: "1rem 2rem" }}
                  className="px-6 py-3 text-left text-sm font-medium text-gray-500"
                >
                  #
                </th>
                <th
                  style={{ padding: "1rem 2rem" }}
                  className="px-6 py-3 text-left text-sm font-medium text-gray-500"
                >
                  BLOG TITLE
                </th>
                <th
                  style={{ padding: "1rem 2rem" }}
                  className="px-6 py-3 text-left text-sm font-medium text-gray-500"
                >
                  DATE
                </th>
                <th
                  style={{ padding: "1rem 2rem" }}
                  className="px-6 py-3 text-left text-sm font-medium text-gray-500"
                >
                  STATUS
                </th>
                <th
                  style={{ padding: "1rem 2rem" }}
                  className="px-6 py-3 text-left text-sm font-medium text-gray-500"
                >
                  ACTIONS
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((blog, idx) => (
                <tr key={blog.id} className="hover:bg-gray-50">
                  <td
                    style={{ padding: "1rem 2rem" }}
                    className="px-6 py-4 text-sm text-gray-700"
                  >
                    {idx + 1}
                  </td>
                  <td
                    style={{ padding: "1rem 2rem" }}
                    className="px-6 py-4 text-sm text-gray-700"
                  >
                    {blog.title}
                  </td>
                  <td
                    style={{ padding: "1rem 2rem" }}
                    className="px-6 py-4 text-sm text-gray-700"
                  >
                    {new Date(blog.createdAt).getDate()}{" "}
                    {months[new Date(blog.createdAt).getMonth()]}
                    {new Date(blog.createdAt).getFullYear()}
                  </td>
                  <td
                    style={{ padding: "1rem 2rem" }}
                    className="px-6 py-4 text-green-600 font-medium"
                  >
                    {blog.status}
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <button
                      style={{ padding: "1rem 2rem" }}
                      className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
                    >
                      Unpublish
                    </button>
                    <button
                      style={{ padding: "1rem 2rem" }}
                      className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200"
                    >
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
  );
};

export default BlogList;
