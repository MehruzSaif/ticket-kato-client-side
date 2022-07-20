import React from 'react';
import { BsPeopleFill } from "react-icons/bs";
import { FaCommentDots } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";
import { FaBusAlt} from "react-icons/fa";
import CountUp from 'react-countup';
import './Business.css';

const Business = () => {
    return (
        <div className='summary'>

            <h2 className='text-center pt-4 font-bold'>A E-ticketing Company You Can Count On</h2>

        <div className='counter-up'>

            <div className='content'>
                <div className='box'>
                    <div class='icon'><BsPeopleFill /></div>
                    <div class='counter'><CountUp end={15} duration={1.5} />M+</div>
                    <div class='text'>Customers</div>
                </div>
                <div className='box'>
                    <div class='icon'><HiBriefcase /></div>
                    <div class='counter'><CountUp end={160} duration={1.5} />+</div>
                    <div class='text'>Companies</div>
                </div>
                <div className='box'>
                    <div class='icon'><FaCommentDots /></div>
                    <div class='counter'><CountUp end={50} duration={1.5} />K+</div>
                    <div class='text'>Reviews</div>
                </div>
                <div className='box'>
                    <div class='icon'><FaBusAlt /></div>
                    <div class='counter'><CountUp end={1280} duration={1.5} />+</div>
                    <div class='text'>Total Vehicles</div>
                </div>

            </div>

        </div>
    </div>

    );
};

export default Business;
