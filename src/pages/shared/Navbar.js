import React, { useEffect } from "react";
import "./Navber.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import UseHooks from "./UseHooks";

const Navbar = () => {
  const [theme,setTheme]=UseHooks()
  console.log(theme);
  
  const [user] = useAuthState(auth);
  const [dark,setDark]=useState(false);
  const themes=()=>{
    setDark(!dark);
    setTheme(!theme);
  }
  useEffect(()=>{
    //  document.body.className=themes;
  },[])

  const logout = () => {
    signOut(auth);
  };

  const [nav, setNav] = useState(false);
  const backgroundChange = () => {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  //  "style-nev"
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
            <ul class="d-flex navbar-nav ">
              <li class="nav-item dropdown me-2">
                <a
                  class="nav-link active dropdown-toggle"
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
                    <a class="dropdown-item" href="#">
                      Book a Tickets
                    </a>
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
                  class="nav-link active dropdown-toggle"
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
                  class="nav-link active dropdown-toggle"
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
                  class="nav-link active dropdown-toggle"
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
        dark?   <button  onClick={themes} className={`${dark?'bg-primary':'bg-sucess'}`}>Light</button>:
        <button  onClick={themes} className={`${dark?'bg-primary':'bg-sucess'}`}>Dark
        </button>
      }
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
