import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import Nav from "./components/home/Nav";
import Footer from "./components/Footer";
import Blog from "./components/bolg/Blog";
import DashBord from "./components/admin/DashBord";
import Admin from "./components/admin/Admin";
import AddBlog from "./components/admin/AddBlog";
import BlogList from "./components/admin/BlogList";
import Comments from "./components/admin/Comments";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
import { UseAppContext } from "./context/AppContext";
import "quill/dist/quill.snow.css"

const App = () => {
   const{token} = UseAppContext();

  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const hideNav = isAdminRoute && !token;
  const hideFooter = isAdminRoute;
 
  return (
    <div>
      <Toaster />
      {!hideNav && <Nav />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Blog />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={token?<Admin />:<Login />}>
          <Route index element={<DashBord />}></Route>
          <Route path="addBlog" element={<AddBlog />}></Route>
          <Route path="listBlog" element={<BlogList />}></Route>
          <Route path="comments" element={<Comments />}></Route>
        </Route>
      </Routes>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default App;
