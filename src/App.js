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
import AddReview from "./pages/Dashboard/AddReview";
import Flight from "./pages/Searching/Flight";
import Train from "./pages/Searching/Train";
import Launch from "./pages/Searching/Launch";
import Bus from "./pages/Searching/Bus";
import NotFound from "./pages/shared/NotFound";
// import BusList from "./pages/SearchResult/BusList";
import BusList from "./pages/SearchResult/BusList";
import Contact from "./pages/Home/Contact";
import BussTicket from "./BusTiceket/BussTicket";
import RequireAuth from "./pages/Authentication/RequireAuth";
import About from './pages/shared/About';
import Dashboard from './pages/Dashboard/Dashboard'
import UserPanel from "./pages/Dashboard/UserPanel";
import MyProfile from "./pages/Dashboard/MyProfile";
import DashboardIndex from "./pages/Dashboard/DashboardIndex"
import AddBuses from "./pages/Dashboard/AddBuses";
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

          <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route path="userPanel" element={<UserPanel></UserPanel>}></Route>
           <Route index element={<DashboardIndex></DashboardIndex>}></Route>
           <Route path="myProfile" element={<MyProfile></MyProfile>}></Route> 
           <Route path="addReview" element={<AddReview></AddReview>}></Route>
           <Route path="addBuses" element={<AddBuses></AddBuses>}></Route>
           
           
        </Route>

          <Route path='/addReview' element={<RequireAuth><AddReview></AddReview></RequireAuth>} />
          <Route path='/contactus' element={<Contact></Contact>} />
          <Route path='/about' element={<About></About>} />
          <Route path='/busTicket' element={<BussTicket></BussTicket>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <ToastContainer position="top-center" />

      </div>
    </div>
  );

}

export default App;
