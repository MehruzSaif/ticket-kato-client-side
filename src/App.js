import "./App.css";
import Navbar from "./pages/shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Authentication/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';
import UseHooks from "./pages/shared/UseHooks";


import Signup from "./pages/Authentication/Signup";
import BookTicket from "./BooksTicket/BookTicket";

function App() {
  // const [theme,setTheme]=useState(false)
  // const [theme,setTheme]=useH
    // const [theme,setTheme]=UseHooks()
    // console.log(theme);
  return(
    <div >
      <div className="content-bg-color main-content">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='BookList' element={<BookTicket/>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer position="top-center" />
  
      
      </div>
    </div>
  );

}

export default App;
