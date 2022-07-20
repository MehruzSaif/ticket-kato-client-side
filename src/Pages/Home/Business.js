import React from 'react';
import { BsPeopleFill } from "react-icons/bs";
import { FaCommentDots } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";
import { FaBusAlt} from "react-icons/fa";
import CountUp from 'react-countup';
import './Business.css';

const Business = () => {
    return (
        <div className='business'>
        <div className='business-main'>
            <h2 className='text-center mb-5 mt-3'>Business Summary</h2>
            <div className='summary-items'>
                <div className='summary-item'>
                <BsPeopleFill className='summary-item-icon'/>
                <p>Customers</p>
                <p className='summary-item-number'><CountUp end={15} duration={1.5} />M+</p>
                </div>
                <div className='summary-item'>
                <HiBriefcase className='summary-item-icon-companies'/>
                <p>Associate Companies</p>
                <p className='summary-item-number-companies'><CountUp end={150} duration={1.5} />+</p>
                </div>
                <div className='summary-item'>
                <FaCommentDots className='summary-item-icon'/>
                <p>Reviews</p>
                <p className='summary-item-number'><CountUp end={50} duration={1.5} />K+</p>
                </div>

                <div className='summary-item'>
                <FaBusAlt className='summary-item-icon-vehicles'/>
                <p>Total Vehicles</p>
                <p className='summary-item-number-vehicles'><CountUp end={1260} duration={1.5} />+</p>
                </div>
            </div>
        </div>
        </div>

    );
};

export default Business;
