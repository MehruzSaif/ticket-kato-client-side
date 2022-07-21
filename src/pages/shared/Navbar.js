import React from "react";
import "./Navber.css";

const Navbar = () => {
  // navbar-light bg-white 
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid ">
          <a class="navbar-brand" href="#">
            <img
              href="#"
              src="https://i.ibb.co/JdDqrdk/ticket-Kato-2.png"
              alt=""
              width="125"
              height="40"
            />
          </a>
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
                  Book Ticket
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Book a Ticket
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
                      Terms & Condition
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
                <button
                  class="btn px-4 mx-auto btn-info text-white"
                  aria-current="page"
                  href="#"
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
