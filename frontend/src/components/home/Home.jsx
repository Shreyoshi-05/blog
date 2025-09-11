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
  // const blogs = [
  //   {
  //     id: 1,
  //     title: "The Future of AI in Everyday Life",
  //     description:
  //       "Exploring how artificial intelligence is reshaping daily activities from smart homes to healthcare.",
  //     category: "technology",
  //     image: "https://source.unsplash.com/600x400/?artificial-intelligence",
  //   },
  //   {
  //     id: 2,
  //     title: "5 Startup Mistakes to Avoid",
  //     description:
  //       "Common pitfalls that new entrepreneurs face and how to overcome them.",
  //     category: "startup",
  //     image: "https://source.unsplash.com/600x400/?startup",
  //   },
  //   {
  //     id: 3,
  //     title: "Morning Routines of Successful People",
  //     description:
  //       "Discover daily habits and routines that fuel productivity and creativity.",
  //     category: "lifestyle",
  //     image: "https://source.unsplash.com/600x400/?morning",
  //   },
  //   {
  //     id: 4,
  //     title: "Investing in the Stock Market 101",
  //     description:
  //       "A beginner-friendly guide to understanding and investing in stocks.",
  //     category: "finance",
  //     image: "https://source.unsplash.com/600x400/?finance",
  //   },
  //   {
  //     id: 5,
  //     title: "Blockchain Beyond Cryptocurrency",
  //     description:
  //       "The real-world applications of blockchain technology across industries.",
  //     category: "technology",
  //     image: "https://source.unsplash.com/600x400/?blockchain",
  //   },
  //   {
  //     id: 6,
  //     title: "How to Pitch to Investors",
  //     description:
  //       "Tips and strategies for creating a winning pitch deck for your startup.",
  //     category: "startup",
  //     image: "https://source.unsplash.com/600x400/?pitch",
  //   },
  //   {
  //     id: 7,
  //     title: "Minimalist Lifestyle Hacks",
  //     description:
  //       "Practical steps to simplify your life and focus on what truly matters.",
  //     category: "lifestyle",
  //     image: "https://source.unsplash.com/600x400/?minimalism",
  //   },
  //   {
  //     id: 8,
  //     title: "Personal Finance for Millennials",
  //     description:
  //       "Budgeting, saving, and investing tips for the modern generation.",
  //     category: "finance",
  //     image: "https://source.unsplash.com/600x400/?money",
  //   },
  //   {
  //     id: 9,
  //     title: "The Rise of Quantum Computing",
  //     description:
  //       "How quantum technology will change the future of computing and problem solving.",
  //     category: "technology",
  //     image: "https://source.unsplash.com/600x400/?quantum",
  //   },
  //   {
  //     id: 10,
  //     title: "Bootstrapping vs. VC Funding",
  //     description:
  //       "Which path is right for your startup: self-funding or venture capital?",
  //     category: "startup",
  //     image: "https://source.unsplash.com/600x400/?venture-capital",
  //   },
  //   {
  //     id: 11,
  //     title: "Travel on a Budget",
  //     description: "Tips for exploring the world without breaking the bank.",
  //     category: "lifestyle",
  //     image: "https://source.unsplash.com/600x400/?travel",
  //   },
  //   {
  //     id: 12,
  //     title: "Understanding Cryptocurrency",
  //     description:
  //       "Beginner’s guide to Bitcoin, Ethereum, and the world of crypto assets.",
  //     category: "finance",
  //     image: "https://source.unsplash.com/600x400/?cryptocurrency",
  //   },
  //   {
  //     id: 13,
  //     title: "Cybersecurity in 2025",
  //     description:
  //       "Trends and challenges in keeping your data and devices safe.",
  //     category: "technology",
  //     image: "https://source.unsplash.com/600x400/?cybersecurity",
  //   },
  //   {
  //     id: 14,
  //     title: "Scaling Your Startup",
  //     description:
  //       "Strategies to grow your business sustainably while avoiding burnout.",
  //     category: "startup",
  //     image: "https://source.unsplash.com/600x400/?scaling",
  //   },
  //   {
  //     id: 15,
  //     title: "Work-Life Balance in the Digital Age",
  //     description: "How to maintain healthy boundaries while working remotely.",
  //     category: "lifestyle",
  //     image: "https://source.unsplash.com/600x400/?work-life",
  //   },
  // ];

  const [menu, setMenu] = useState("All");
  const [serch, setSerch] = useState("")
  const inputRef = useRef();

  const { blogs, input, setInput } = UseAppContext();
  // console.log(input);
  // console.log(blogs);

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

  function handelSearch(){
    setInput(serch)
  }

  function clearserch(){
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
                class="flex-1 outline-none"
                style={{ padding: "0.8rem 2rem" }}
                ref={inputRef}
                value={serch}
                onChange={(e)=>setSerch(e.target.value)}
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
            {input ?
            <div className="flex flex-row">
                  <button
                    onClick={clearserch}
                    style={{ padding: "0.4rem 1rem" }}
                    className="bg-[#7b2cbf] rounded-2xl text-white cursor-pointer"
                  >
                    clear search
                  </button>
                </div>
                :
             blockCategory.map((item) => {
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
            })}
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {state == "All"
              ? filterBlogData().map((blog) => (
                  <Cards key={blog.id} blog={blog} />
                ))
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
