import "./App.css";
import Navbar from "./pages/shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Authentication/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';
import UseHooks from "./pages/shared/UseHooks";



function App() {
  // const [theme,setTheme]=useState(false)
  // const [theme,setTheme]=useH
    const [theme,setTheme]=UseHooks()
    console.log(theme);
  return(
    <div className={`${theme?'theme-dark':""}`}>
      <div className="content-bg-color main-content">
{/* {theme?'theme-dark':""} */}
     
      <Navbar></Navbar>
      <h1>This is the background color</h1>
      <input className="chackbox" type="checkbox" name="" id="" onChange={()=>setTheme(!theme)}/>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <ToastContainer position="top-center" />
  
      
      </div>
    </div>
  );

}

export default App;
