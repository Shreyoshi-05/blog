import React from "react";
import { FaCheckCircle, FaTrash } from "react-icons/fa";

const Comments = () => {
  const comments = [
    {
      id: 1,
      blog: "A detailed step by step guide to manage your lifestyle",
      name: "Michael Scott",
      comment: "This is my new comment",
      date: "4/30/2025",
    },
    {
      id: 2,
      blog: "How to create an effective startup roadmap or ideas",
      name: "John Doe",
      comment: "This is a nice blog",
      date: "4/29/2025",
    },
    {
      id: 3,
      blog: "Tips for getting the most out of apps and software",
      name: "Sam Smith",
      comment: "This is the best blog, everybody should read it",
      date: "4/22/2025",
    },
  ];

  return (
    <div style={{"padding":"2rem 9rem"}} className="flex min-h-screen">
      {/* Sidebar placeholder */}
      <aside className="hidden md:block w-[15%]  "></aside>

      {/* Main Content */}
      <main className="flex-1 w-[60%] lg:w-[70%] flex items-start justify-center p-4">
        <div
          className="bg-white rounded-lg shadow-md w-full max-w-6xl"
          style={{ margin: "1rem 2rem" }}
        >
          {/* Header */}
          <div style={{"padding":"1rem 2rem"}} className="flex flex-col md:flex-row justify-between md:items-center px-6 py-4 border-b gap-3">
            <h2
              style={{ marginTop: "0.5rem" }}
              className="text-lg font-semibold"
            >
              Comments
            </h2>
            <div className="flex gap-2">
              <button className="px-4 py-1 border rounded-md text-sm hover:bg-gray-100">
                Approved
              </button>
              <button className="px-4 py-1 border rounded-md text-sm hover:bg-gray-100">
                Not Approved
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg">
            <table   className="min-w-full divide-y divide-gray-200">
              <thead  className="bg-gray-50">
                <tr >
                  <th style={{"padding":"1rem 2rem"}} className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    BLOG TITLE & COMMENT
                  </th>
                  <th style={{"padding":"1rem 2rem"}} className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    DATE
                  </th>
                  <th style={{"padding":"1rem 2rem"}} className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {comments.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-50">
                    <td style={{"padding":"1rem 2rem"}} className="px-6 py-4 text-sm text-gray-700">
                      <p className="font-medium">Blog : {c.blog}</p>
                      <p className="text-gray-600">Name : {c.name}</p>
                      <p className="text-gray-600">Comment : {c.comment}</p>
                    </td>
                    <td style={{"padding":"1rem 2rem"}} className="px-6 py-4 text-sm text-gray-700">
                      {c.date}
                    </td>
                    <td style={{"padding":"1rem 2rem"}} className="px-6 py-4 flex gap-5 items-center">
                      <button className="text-green-500 hover:text-green-600">
                        <FaCheckCircle size={18} />
                      </button>
                      <button className="text-red-500 hover:text-red-600">
                        <FaTrash size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Comments;
