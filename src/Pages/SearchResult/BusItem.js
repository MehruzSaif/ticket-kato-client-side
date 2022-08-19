import React from 'react';
import { Link } from 'react-router-dom';
import './BusItem.css';
const BusItem = ({ item }) => {
    return (
        <div className="searchItem p-4" >
            <img
                src={item.photos[0]}
                alt=""
                className="siImg mt-5"
            />
            <div className="siDesc">
                <h1 className="siTitle">{item.operator_name}</h1>
                <span className="siDistance">{item.bus_type}</span>
                <span className="siTaxiOp" style={{"width":"150px"}}>Departure Time: {item.departure_time}</span>
                <span className="siTaxiOp" style={{"width":"150px"}}>Arrival Time: {item.arrival_time}</span>
                <span className="siSubtitle">
                {item.bus_class}
                </span>
                <span className="siFeatures">
                    Coach-Number: {item.coach_number}
                </span>
                <span className="siCancelOp">Free Cancellation </span>
                <span className="siTaxOp">Boarding Point:{item.boarding_point}</span>
                    <span className="siTaxOp">Dropping Point Point:{item.dropping_point}</span>
            </div>
            <div className="siDetails">
                {item.rating &&
                    <div className="siRating">
                        <span>Excellent</span>
                        <button>{item.rating}</button>
                    </div>
                }

                <div className="siDetailTexts">
                    <span className="siPrice">{item.price} Tk</span>
                    
                    <Link to='/singleHotel'><button className="siCheckButton">View Seats</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BusItem;