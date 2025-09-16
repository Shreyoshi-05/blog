import React, { useRef, useState } from "react";
import Input from "./Input";
import Cards from "./Cards";
import Nav from "./Nav";
import Footer from "../Footer";
import { UseAppContext } from "../../context/AppContext";

const Home = () => {
  const blockCategory = [
    "All",
    "technology",
    "startup",
    "lifestyle",
    "finance",
  ];
  const [state, setState] = useState("All");
  const [menu, setMenu] = useState("All");
  const [search, setSerch] = useState("");
  const inputRef = useRef();
  const [serchedblog, setSerchedBlog] = useState([]);

  const { blogs, input, setInput, category, setBlogs } = UseAppContext();

  const filterBlogData = () => {
    if (blogs) {
      if (input == "") {
        return blogs;
      } else {
        return blogs.filter(
          (blog) =>
            blog.title.toLowerCase().includes(input.toLowerCase()) ||
            blog.category.toLowerCase().includes(input.toLowerCase())
        );
      }
    }
  };

  function handelSearch() {
    setInput(search);
    let copy = [...blogs];
    copy = copy.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    );
    setSerchedBlog(copy);
  }
  // console.log(blogs);
  console.log(serchedblog);

  function clearserch() {
    setInput("");
    setSerch("");
  }

  return (
    <div className="w-[100%]">
      {/* <Nav /> */}
      <div
        style={{ margin: "5rem auto" }}
        className="w-[70%] flex items-center justify-center"
      >
        <div class=" flex flex-col gap-7 w-full items-center justify-center ">
          <div class="mb-6">
            <span
              style={{ padding: "0.7rem 4rem" }}
              class="px-4 py-1 rounded-full bg-[#fae9fd] text-sm font-medium text-[rgb(123,44,191)] shadow-md border border-[#7b2cbf]"
            >
              New: AI feature integrated ✨
            </span>
          </div>

          <h1 class="text-4xl md:text-5xl font-bold text-center leading-tight">
            Your own <span class="text-[#7b2cbf]">blogging</span>
            <br />
            platform.
          </h1>

          <p class="mt-4 max-w-xl text-center text-gray-400">
            This is your space to think out loud, to share what matters, and to
            write without filters. Whether it’s one word or a thousand, your
            story starts right here.
          </p>

          <div class="mt-8 max-w-lg">
            <div class="flex items-center border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <input
                type="text"
                placeholder="Search for blogs.."
                class="flex-1 outline-none bg-white"
                style={{ padding: "0.8rem 2rem" }}
                ref={inputRef}
                value={search}
                onChange={(e) => setSerch(e.target.value)}
              />
              <button
                onClick={handelSearch}
                style={{ padding: "0.8rem 2rem" }}
                class="bg-[#7b2cbf] h-full text-white hover:bg-[#c573ff] transition"
              >
                Search
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            {input ? (
              <div className="flex flex-row">
                <button
                  onClick={clearserch}
                  style={{ padding: "0.4rem 1rem" }}
                  className="bg-[#7b2cbf] rounded-2xl text-white cursor-pointer"
                >
                  clear search
                </button>
              </div>
            ) : (
              category.map((item) => {
                return (
                  <div className="flex flex-row" key={item}>
                    <button
                      onClick={() => setState(item)}
                      style={{ padding: "0.2rem 1rem" }}
                      className={
                        item == state
                          ? "bg-[#7b2cbf] rounded-2xl text-white "
                          : "cursor-pointer"
                      }
                    >
                      {item}
                    </button>
                  </div>
                );
              })
            )}
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {state == "All" && search == ""
              ? filterBlogData().map((blog) => (
                  <Cards key={blog.id} blog={blog} />
                ))
              : search
              ? serchedblog.map((blog) => <Cards key={blog.id} blog={blog} />)
              : filterBlogData()
                  .filter((blog) => blog.category == state)
                  .map((item) => <Cards key={item.id} blog={item} />)}
          </div>

          <div
            style={{ marginTop: "7rem" }}
            className="flex flex-col align-center justify-center items-center gap-5"
          >
            <h1 className="font-bold text-3xl">Never Miss a Blog</h1>
            <p className="text-[14px] text-gray-400">
              Subscribe to get the latest of new tech and executive news.
            </p>

            <div class="flex items-center border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <input
                type="text"
                placeholder="Enter your email id"
                class="flex-1 outline-none"
                style={{ padding: "0.8rem 2rem" }}
              />
              <button
                style={{ padding: "0.8rem 2rem" }}
                class="bg-[#7b2cbf] h-full text-white hover:bg-[#c573ff] transition"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
