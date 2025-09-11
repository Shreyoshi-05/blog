import React, { useState } from "react";
import { UseAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const {axios,setToken} = UseAppContext();

  async function handelSubmit(e){
    e.preventDefault();

    try {
      const {data} = await axios.post(`api/admin/login`,{email,pass})

      if(data.success){
        setToken(data.token);
        localStorage.clear();
        localStorage.setItem("token",data.token);
        axios.defaults.headers.common['Authorization'] = data.token;
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }



  return (
    <div className="flex items-center  justify-center min-h-screen bg-gray-100">
      <div
        style={{ padding: "2rem 1.5rem" }}
        className="bg-white flex flex-col gap-7 p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-2">
          <span className="text-[#7b2cbf]">Admin</span> Login
        </h2>
        <p className="text-gray-500 text-center mb-6 text-sm">
          Enter your credentials to access the admin panel
        </p>

        {/* Form */}
        <form className="space-y-4 flex flex-col gap-7" onSubmit={handelSubmit}>
          <div className="flex flex-col gap-5">
            <label className="block  text-gray-600 text-sm mb-1">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="your email id"
              className="w-full border-b border-gray-300 focus:border-[#7b2cbf] outline-none py-2 px-1"
            />
          </div>
          <div className="flex flex-col gap-5">
            <label className="block text-gray-600 text-sm mb-1">Password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="your password"
              className="w-full border-b border-gray-300 focus:border-[#7b2cbf] outline-none py-2 px-1"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            style={{ padding: "1rem 2rem" }}
            className="w-full mt-4 bg-[#9d4edd] text-white py-2 rounded-md hover:bg-[#c77dff] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
