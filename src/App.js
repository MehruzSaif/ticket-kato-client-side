import "./App.css";
import Navbar from "./pages/shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Authentication/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./pages/Authentication/Signup";
import BookTicket from "./BooksTicket/BookTicket";
// import Footer from "./pages/shared/Footer";
import AddReview from "./pages/Dashboard/Customer/AddReview";
import Flight from "./pages/Searching/Flight";
import Train from "./pages/Searching/Train";
import Launch from "./pages/Searching/Launch";
import Bus from "./pages/Searching/Bus";

import NotFound from "./pages/shared/NotFound";


// import BusList from "./pages/SearchResult/BusList";


import BusList from "./pages/SearchResult/BusList";

import Contact from "./pages/Home/Contact";
import BussTicket from "./BusTiceket/BussTicket";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from './pages/About';


function App() {
  // const [theme,setTheme]=useState(false)
  // const [theme,setTheme]=useH
  // const [theme,setTheme]=UseHooks()
  // console.log(theme);
  return (
    <div >
      <div className="content-bg-color main-content">

        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}>
            <Route path='/' element={<Bus></Bus>}></Route>
            <Route path='bus' element={<Bus></Bus>}></Route>
            <Route path='flight' element={<Flight></Flight>}></Route>
            <Route path='train' element={<Train></Train>}></Route>
            <Route path='launch' element={<Launch></Launch>}></Route>
          </Route>
          <Route path='BookList' element={<BookTicket />}></Route>
          <Route path='/busList' element={<BusList />}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path='/addReview' element={<AddReview></AddReview>} />
          <Route path='/contactus' element={<Contact></Contact>} />
          <Route path='/about' element={<About></About>} />
          <Route path='/busTicket' element={<BussTicket></BussTicket>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <ToastContainer position="top-center" />
      

      </div>
    </div>
  );

}

export default App;


