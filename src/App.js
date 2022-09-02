import "./App.css";
import Navbar from "./Pages/shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Authentication/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./Pages/Authentication/Signup";
import BookTicket from "./BooksTicket/BookTicket";
// import Footer from "./Pages/shared/Footer";
import AddReview from "./Pages/Dashboard/AddReview";
import Flight from "./Pages/Searching/Flight";
import Train from "./Pages/Searching/Train";
import Launch from "./Pages/Searching/Launch";
import Bus from "./Pages/Searching/Bus";
import NotFound from "./Pages/shared/NotFound";
// import BusList from "./Pages/SearchResult/BusList";
import BusList from "./Pages/SearchResult/BusList";
import Contact from "./Pages/Home/Contact";
import BussTicket from "./BusTiceket/BussTicket";
import RequireAuth from "./Pages/Authentication/RequireAuth";
import About from './Pages/shared/About';
import Dashboard from './Pages/Dashboard/Dashboard'
import UserPanel from "./Pages/Dashboard/UserPanel";
import MyProfile from "./Pages/Dashboard/MyProfile";
import DashboardIndex from "./Pages/Dashboard/DashboardIndex"
import AddBuses from "./Pages/Dashboard/AddBuses";
// import Dashboard from "./Pages/Dashboard/Dashboard";
// import About from './Pages/About';
// import RequireAuth from "./Pages/Authentication/RequireAuth";
// import About from './Pages/shared/About';
import Privacy from './Pages/Home/Privacy';
import TermsConditions from './Pages/Home/TermsConditions';
// import Dashboard from './Pages/Dashboard/Dashboard'
// import UserPanel from "./Pages/Dashboard/UserPanel";
// import MyProfile from "./Pages/Dashboard/MyProfile";
// import DashboardIndex from "./Pages/Dashboard/DashboardIndex"
// import AddBuses from "./Pages/Dashboard/AddBuses";
import Payment from "./Pages/Payment/Payment";
import Feedback from './Pages/Home/Feedback';
import Refund from "./Pages/Home/Refund";
import BagInfo from "./Pages/Home/BagInfo";
import PaymentProcess from "./Pages/Payment/PaymentProcess";
import Map from "./Pages/Maps/Map";
import LimitedOffer from "./Pages/Offers/LimitedOffer";

// import About from "./Pages/shared/About";

function App() {
  return (
    <div >
        <div className="content-bg-color main-content">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}>
              <Route path="/" element={<Bus></Bus>}></Route>
              <Route path="bus" element={<Bus></Bus>}></Route>
              <Route path="flight" element={<Flight></Flight>}></Route>
              <Route path="train" element={<Train></Train>}></Route>
              <Route path="launch" element={<Launch></Launch>}></Route>
            </Route>
            <Route path="/Payment" element={<Payment></Payment>} />
            <Route path="/destination" element={<Map></Map>} />
            <Route path="/offer" element={<LimitedOffer></LimitedOffer>} />
            <Route path="/paymentProcess" element={<PaymentProcess></PaymentProcess>}></Route>
            <Route path="BookList" element={<BookTicket />}></Route>
            <Route path="/busList" element={<BusList />}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>

            <Route path="/addReview" element={<AddReview></AddReview>} />
            <Route path="/privacy" element={<Privacy></Privacy>} />
            <Route
              path="/termsCondition"
              element={<TermsConditions></TermsConditions>}
            />
            <Route path="/feedback" element={<Feedback></Feedback>} />
            <Route path="/refund" element={<Refund></Refund>} />
            <Route path="/bagInfo" element={<BagInfo></BagInfo>} />
            <Route
              path="dashboard"
              element={
                <RequireAuth>
                  <Dashboard></Dashboard>
                </RequireAuth>
              }
            >
              <Route path="userPanel" element={<UserPanel></UserPanel>}></Route>
              <Route index element={<DashboardIndex></DashboardIndex>}></Route>
              <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
              <Route path="addReview" element={<AddReview></AddReview>}></Route>
              <Route path="addReview" element={<AddReview></AddReview>}></Route>
              <Route path="addBuses" element={<AddBuses></AddBuses>}></Route>
            </Route>

            <Route
              path="/addReview"
              element={
                <RequireAuth>
                  <AddReview></AddReview>
                </RequireAuth>
              }
            />

            <Route path="/contactus" element={<Contact></Contact>} />
            <Route path="/about" element={<About></About>} />
            <Route
              path="/busTicket"
              element={<BussTicket></BussTicket>}
            ></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
          <ToastContainer position="top-center" />
        </div>
      </div>
   
  );

}

export default App;


