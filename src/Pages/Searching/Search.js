import React, { useEffect, useState } from 'react';
import { BiBus } from "react-icons/bi";
import { IoMdTrain } from "react-icons/io";
import { FaPlaneDeparture } from "react-icons/fa";
import { RiShipLine } from "react-icons/ri";
import { GiCommercialAirplane } from "react-icons/gi";
import './Search.css';
// import { DatePicker } from 'antd';
// import "antd/dist/antd.css";
import axios from 'axios';
import { Link,Outlet } from "react-router-dom";


const Search = () => {
    return (
        <div className='d-flex justify-content-center bg-dark p-3 shadow'>
            <div className='search-container search-main p-4'>
                <div className='text-center search-title mb-3'>
                    <h3>Find Your Tickets</h3>
                </div>
                <div className='d-flex justify-content-center '>
                    <div className='w-75 d-flex justify-content-evenly search-icon-container '>
                        <div className='text-center'>
                        <Link to='/'> <BiBus className='search-icon' /></Link>
                            <p className='search-icon-name'>Buses</p>
                        </div>
                        <div className='text-center'>
                        <Link to='/flight'><GiCommercialAirplane className='search-icon' /></Link>

                            <p className='search-icon-name'>Flights</p>
                        </div>
                     
                        <div className='text-center'>
                        <Link to='/train'><IoMdTrain className='search-icon' /></Link>
                            <p className='search-icon-name'>Trains</p>
                        </div>
                        
                        <div className='text-center'>
                        <Link to='/launch'><RiShipLine className='search-icon' /></Link>
                            <p className='search-icon-name'>Launches</p>
                        </div>
                    </div>
                </div>
                <Outlet/>
            </div>

            
        </div>
    );
};

export default Search;