import "./App.css";
import Navbar from "./pages/shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Authentication/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./pages/Authentication/Signup";
import Footer from "./pages/shared/Footer";
import AddReview from "./pages/Dashboard/Customer/AddReview";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path='/addReview' element={<AddReview></AddReview>}/>
      </Routes>
      <ToastContainer position="top-center" />
      <Footer></Footer>
    </>
  );
}

export default App;
