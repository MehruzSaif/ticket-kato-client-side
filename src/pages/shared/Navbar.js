// import React, { useEffect } from "react";
import "./Navber.css";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import UseHooks from "./UseHooks";

const Navbar = () => {
  const[tm,setTm]=useState('light-theme')
  const toggleTheme=()=>{
    if(tm ==='dark-theme'){
      setTm('light-theme')
    }
    else{
      setTm('dark-theme')
    }
  }
  useEffect(()=>{
    document.body.className=tm;
  },[tm]);



  const [theme,setTheme]=UseHooks()
  // console.log(theme);
  
  const [user] = useAuthState(auth);
  const [dark,setDark]=useState(false);
  const themes=()=>{
    setDark(!dark);
    setTheme(!theme);
  }
  useEffect(()=>{
  },[])
  console.log(user);

  const logout = () => {
    signOut(auth);
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
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid fs-5">
          <div class="container">
            <Link class="navbar-brand" to="/">
              <img
                src="https://i.ibb.co/MsmSNWq/My-project-1.png?fbclid=IwAR2MinoRXSa1rYKjZdbwfQtQxwz4x7TzHB8Dj37ow-rGO6mDOd1z14FyQxU"
                alt=""
                width="125"
                height="40"
              />
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
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul> */}
            <ul class="d-flex navbar-nav text-black">
              <li class="nav-item dropdown me-2 text-white">
              
                <a
                  class="nav-link active dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Book Tickets
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
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
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Schedules
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="d-flex navbar-nav ">
              <li class="nav-item dropdown me-4">
                <a
                  class="nav-link active dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Travel Info
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Baggage Info
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Refund Request & Policy
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="d-flex navbar-nav ">
              <li class="nav-item dropdown me-4">
                <a
                  class="nav-link active dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Offers
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
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
            </ul>
            <ul class="d-flex navbar-nav ">
              <li class="nav-item dropdown me-5">
                <a
                  class="nav-link active dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Feedback
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="navbar-nav me-end mb-2 mb-lg-0">
              <li class="nav-item">
                {user ? (
                  <button onClick={logout} className="btn btn-danger">
                    Logout
                  </button>
                ) : (
                  <Link to="/login" className="btn btn-success btn-rounded">
                    Login
                  </Link>
                )}
              </li>
              <li class="nav-item">
              {
        dark?   <button onClick={()=>{ toggleTheme(); themes()}
         }className={`${dark?'bg-sucess':'bg-dark'}`}>Light</button>:
        <button onClick={()=>{ toggleTheme(); themes()}
      }className={`${dark?'bg-primary':'bg-sucess'}`}>Dark
        </button>
      }
              </li>

            </ul>
            <ul className="navbar-nav me-end mb-2 mb-lg-0 mx-3">
              {user?.photoURL ? (
                <div className="h-10 w-10 sm:mb-2 lg:mb-0 mr-3 ml-4">
                  <img
                    src={user?.photoURL}
                    class="rounded-circle d-flex justify-center align-items-center"
                    style={{ width: "50px", height: "45px" }}
                    alt="Avatar"
                  />
                </div>
              ) : (
                <div className="h-10 w-10 sm:mb-2 lg:mb-0 mr-3 ml-4">
                  <img
                    src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"
                    class="rounded-circle d-flex justify-center align-items-center"
                    style={{ width: "50px", height: "45px" }}
                    alt="Avatar"
                  />
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
