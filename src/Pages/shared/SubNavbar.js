import React from 'react';
import { Link } from "react-router-dom";
const SubNavbar = () => {
    return (
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
        <a>
          Travel Info
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 bg-indigo-600">
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
      <li tabindex="0">
        <a>
          Offers
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 bg-indigo-600">
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
                    <a class="dropdown-item" href="#">
                      Feedback
                    </a>
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
                    <a class="dropdown-item" href="#">
                      Feedback
                    </a>
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
    );
};

export default SubNavbar;