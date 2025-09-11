import Quill from "quill";
import React, { useEffect, useRef, useState } from "react";
import { FaCloudUploadAlt, FaInfoCircle } from "react-icons/fa";
import { FaMagic } from "react-icons/fa";
import { UseAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const AddBlog = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [categoryname, setCategoryName] = useState("");
  const [isPublished, setIspublished] = useState(false);
  console.log(categoryname);

  const { category, axios,token } = UseAppContext();

  const editorRef = useRef();
  const quillRef = useRef();

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  async function handelSubmit(e) {
    try {
      e.preventDefault();
      setIsAdding(true);

      const data = {
        title,
        subTitle,
        description: quillRef.current.root.innerHTML,
        category:categoryname,
        isPublished,
      };

      const formData = new FormData();
      formData.append("blog",JSON.stringify(data));
      formData.append("image",image);

      const res = await axios.post(`api/blog/add`,formData,{
         headers:{
          
    Authorization: `Bearer ${token}`,
         }
      });

       if (res.data.success) {
      toast.success(res.data.message);
      setImage(null);
      setTitle("");
      setSubTitle("");
      setCategoryName("");
      quillRef.current.root.innerHTML = "";
      setIspublished(false);
    } else {
      toast.error(res.data.message || "Some error occurred in response");
    }

    } catch (error) {
      toast.error(error.message);
    }finally{
      setIsAdding(false);
    }
  }

  console.log(token)


  return (
    <div
      style={{ marginTop: "1rem" }}
      className="w-full flex gap-2 items-start justify-center"
    >
      <form
        onSubmit={handelSubmit}
        style={{ padding: "3rem" }}
        className="w-[50%] flex flex-col gap-5 bg-white shadow-1xl rounded-2xl"
      >
        <h1 className="font-bold te">Uploed thumbnail</h1>
        <label htmlFor="image" className="">
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="thumbnail"
              className="w-[10rem] h-[6rem] max-h-64 object-cover rounded-md"
            />
          ) : (
            <div className="flex flex-col items-start text-gray-500">
              <FaCloudUploadAlt size={50} color="purple" />
              <p className="mt-2">Click to upload</p>
            </div>
          )}
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            hidden
            id="image"
          />
        </label>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">title of your blog?</legend>
          <input
            style={{ padding: "1rem", marginTop: "1rem" }}
            type="text"
            className=" input"
            placeholder="Type here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </fieldset>

        <fieldset className="fieldset ">
          <legend className="fieldset-legend">What is your name?</legend>
          <input
            style={{ padding: "1rem", marginTop: "1rem" }}
            type="text"
            className="input"
            placeholder="Type here"
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
          />
        </fieldset>

        {/* <div >
          <button>generate</button>
        </div> */}

        <div className="relative">
          <legend className="fieldset-legend">Blog Content</legend>

          {/* Quill Editor */}
          <div
            ref={editorRef}
            className="border border-gray-400 rounded-md min-h-[10rem]"
          ></div>

          {/* Button inside editor (bottom-right) */}
          <button
            style={{ padding: "0.4rem 1rem" }}
            type="button"
            className="btn btn-neutral absolute bottom-2 right-2 "
          >
            Generate with Ai <FaMagic />
          </button>
        </div>

        <select
          value={categoryname}
          onChange={(e) => setCategoryName(e.target.value)}
          defaultValue="Pick a text editor"
          className="select"
        >
          <option>Select Category</option>
          {category.map((item, idx) => {
            return (
              <option key={idx} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <div>
          <p>Publish Now</p>
          <input
            type="checkbox"
            checked={isPublished}
            onChange={(e) => setIspublished(e.target.checked)}
          />
        </div>

        <button
          style={{ padding: "1.5rem 1.2rem" }}
          className="btn w-42 btn-neutral bg-[#7b2cbf]"
          type="submit"
        >
          {isAdding ? (
            <span className="loading loading-dots loading-xl"></span>
          ) : (
            "Add Blog"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
