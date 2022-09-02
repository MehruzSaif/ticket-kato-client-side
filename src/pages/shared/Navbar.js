import "./Navber.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from '../../assests/logo.png'
const Navbar = () => {
  const [tm, setTm] = useState('light-theme')
  const toggleTheme = () => {
    if (tm === 'dark-theme') {
      setTm('light-theme')
    }
    else {
      setTm('dark-theme')
    }
  }
  useEffect(() => {
    document.body.className = tm;
  }, [tm]);



 

  const [user] = useAuthState(auth);
  const [dark, setDark] = useState(false);
  const themes = () => {
    setDark(!dark);
    // setTheme(!theme);
  }

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };

  const [nav, setNav] = useState(false);
  const backgroundChange = () => {
    if (window.scrollY >= 20) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", backgroundChange);
  return (
    <div className={nav ? "changebg" : "style-nev"}>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid fs-5">
          <div class="flex items-center justify-center">
            <Link class="navbar-brand" to="/">
            <h2 className="text-2xl text-white ">Ticket-Kato</h2>
            </Link>

          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
             <div class="form-control">
      <input type="text" placeholder="Search" class="input"  />
    </div>
            <ul class="navbar-nav me-end mb-2 mb-lg-0 px-3">
              <li class="nav-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
            <ul class="navbar-nav me-end mb-2 mb-lg-0 px-2">
              <li class="nav-item">
                {dark ? (
                  <a
                    onClick={() => {
                      toggleTheme();
                      themes();
                    }}
                  >
                    <FaSun></FaSun>
                  </a>
                ) : (
                  <a
                    onClick={() => {
                      toggleTheme();
                      themes();
                    }}
                  >
                    <FaMoon></FaMoon>
                  </a>
                )}
              </li>
            </ul>
            <ul className="navbar-nav me-end mb-2 mb-lg-0 mx-2">
              {user?.photoURL ? (
                <div className="h-10 w-10 sm:mb-2 lg:mb-0 mr-3 ml-4">
                  <img
                    src={user?.photoURL}
                    class="rounded-circle d-flex justify-center align-items-center"
                    style={{ width: "50px", height: "40px" }}
                    alt="Avatar"
                  />
                </div>
              ) : (
                <div className="h-10 w-10 sm:mb-2 lg:mb-0 mr-3 ml-4">
                  <img
                    src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"
                    class="rounded-circle d-flex justify-center align-items-center"
                    style={{ width: "50px", height: "40px" }}
                    alt="avatar"
                  />
                </div>
              )}
            </ul>
            <ul class="navbar-nav me-end mb-2 mb-lg-0">
              <li class="nav-item">
                {user ? (
                  <button
                    onClick={logout}
                    className="bg-red-500 p-2 rounded-lg text-lg font-semibold"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="bg-green-500 p-2 rounded-lg text-lg font-semibold hover:text-white"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>

          </div>
        </div>
      </nav>
      <div class="navbar bg-blue-900 py-0">
      <div class="navbar-center ml-96 hidden lg:flex pb-0 mb-0">
    <ul class="menu menu-horizontal p-0 pb-0 mb-0">
      <li tabindex="0">
        <a>
          Book Tickets
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 bg-indigo-600">
        <li>
                    <Link class="dropdown-item" to="/destination">
                      Destinations
                    </Link>
                  </li>
                  
        </ul>
      </li>
      <li tabindex="0">
        <a>
          Travel Info
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 bg-indigo-600">
        <li>
                    <Link class="dropdown-item" to="/bagInfo">
                      Baggage Info
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/privacy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/refund">
                      Refund Request & Policy
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/termsCondition">
                      Terms & Conditions
                    </Link>
                  </li>
        </ul>
      </li>
      <li tabindex="0">
        <a>
          Offers
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 bg-indigo-600">
        <li>
        <Link class="dropdown-item" to="/offer">
                      Offer
                    </Link>
       </li>
        </ul>
      </li>
      <li tabindex="0">
        <a>
          Contact us
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 bg-indigo-600">
        <li>
                    <Link class="dropdown-item" to="/contactus">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/feedback">
                      Feedback
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/about">
                      About Us
                    </Link>
                  </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-2 p-2 shadow bg-indigo-700 rounded-box w-52">
        <li tabindex="0">
          <a class="justify-between">
            Book Tickets
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul class="p-2 ml-2 bg-indigo-600">
          <li>
                    <Link class="dropdown-item" to="BookList">
                      Book a Tickets
                    </Link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Destinations
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Schedules
                    </a>
                  </li>
          </ul>
        </li>
        <li tabindex="0">
          <a class="justify-between">
            Travel Info
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul class="p-2 ml-2 bg-indigo-600">
          <li>
                    <Link class="dropdown-item" to="/bagInfo">
                      Baggage Info
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/privacy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/refund">
                      Refund Request & Policy
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/termsCondition">
                      Terms & Conditions
                    </Link>
                  </li>
          </ul>
        </li>
        <li tabindex="0">
          <a class="justify-between">
          Offers
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul class="p-2 ml-2 bg-indigo-600">
          <li>
                    <a class="dropdown-item" href="#">
                      Ticket Discounts
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Limited Offers
                    </a>
                  </li>
          </ul>
        </li>
        <li tabindex="0">
          <a class="justify-between">
            Contact us 
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul class="p-2 ml-2 bg-indigo-600">
          <li>
                    <Link class="dropdown-item" to="/contactus">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/feedback">
                      Feedback
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/about">
                      About Us
                    </Link>
                  </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
 
</div>
    </div>

  );
};

export default Navbar;
