import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
export const appContext = createContext();

export const AppContextProvider = ({children}) =>{
  const navigate = useNavigate();

  const[token,setToken] = useState(localStorage.getItem("token")||null);
  const[blogs,setBlogs] = useState([]);
  const[input,setInput] = useState("");
  const[category,setCategory] = useState([
    "All",
  "Technology",
  "Lifestyle",
  "Travel",
  "Food"
])

  const fetchBlogs = async() =>{
    try {
      const {data} = await axios.get("/api/blog/all")
      data.success ? setBlogs(data.blogs): toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  }
  
  useEffect(()=>{
    fetchBlogs();
  },[])

  const value = {
    axios,navigate,token,setToken,blogs,setBlogs,input,setInput,category
  };

  return(
    <appContext.Provider value={value}>
    {children}
  </appContext.Provider>
  )
}

export const UseAppContext = () =>{
  return useContext(appContext);
}