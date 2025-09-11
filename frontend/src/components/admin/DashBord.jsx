import React from "react";

const DashBord = () => {
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
  ];

  return (
    <div
      style={{ padding: "2rem 3rem" }}
      className="flex items-center justify-center"
    >
      <div class="w-[60%] m-auto">
        {/* <!-- Top Cards --> */}
        <div style={{"marginBottom":"2rem"}} class="grid grid-cols-3 gap-6 mb-8">
          <div class="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <div class="text-purple-500 text-3xl">
              <i class="fas fa-blog"></i>
            </div>
            <div style={{"padding":"1rem 3rem"}}>
              <h3 class="text-2xl font-bold">10</h3>
              <p class="text-gray-500">Blogs</p>
            </div>
          </div>

          <div class="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <div class="text-blue-500 text-3xl">
              <i class="fas fa-comments"></i>
            </div>
            <div style={{"padding":"1rem 3rem"}}>
              <h3 class="text-2xl font-bold">5</h3>
              <p class="text-gray-500">Comments</p>
            </div>
          </div>

          <div class="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <div class="text-indigo-500 text-3xl">
              <i class="fas fa-file-alt"></i>
            </div>
            <div>
              <h3 class="text-2xl font-bold">0</h3>
              <p class="text-gray-500">Drafts</p>
            </div>
          </div>
        </div>

        {/* <!-- Table --> */}
        <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 style={{"padding":"1rem 3rem"}} className="text-lg font-semibold mb-4">Latest Blogs</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th style={{"padding":"1rem 3rem"}} className="px-6 py-3 text-left text-sm font-medium text-gray-500">#</th>
              <th style={{"padding":"1rem 3rem"}} className="px-6 py-3 text-left text-sm font-medium text-gray-500">BLOG TITLE</th>
              <th style={{"padding":"1rem 3rem"}} className="px-6 py-3 text-left text-sm font-medium text-gray-500">DATE</th>
              <th style={{"padding":"1rem 3rem"}} className="px-6 py-3 text-left text-sm font-medium text-gray-500">STATUS</th>
              <th style={{"padding":"1rem 3rem"}} className="px-6 py-3 text-left text-sm font-medium text-gray-500">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-gray-50">
                <td style={{"padding":".5rem 3rem"}} className="px-6 py-4 text-sm text-gray-700">{blog.id}</td>
                <td style={{"padding":".5rem 3rem"}} className="px-6 py-4 text-sm text-gray-700">{blog.title}</td>
                <td style={{"padding":".5rem 3rem"}} className="px-6 py-4 text-sm text-gray-700">{blog.date}</td>
                <td style={{"padding":".5rem 3rem"}} className="px-6 py-4 text-sm text-green-600 font-medium">{blog.status}</td>
                <td style={{"padding":".5rem 3rem"}} className="px-6 py-4 flex gap-2">
                  <button className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300">
                    Unpublish
                  </button>
                  <button  className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200">
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
