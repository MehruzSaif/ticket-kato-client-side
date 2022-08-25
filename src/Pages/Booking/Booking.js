import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';
import './Booking.css'
import useFetch from '../../hooks/useFetch';
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import axios from "axios";

const Booking = ({ setOpen, busId, item, travelDate }) => {
    const [selectSeats, setSelectSeats] = useState([])
    const [goingDate,setGoingDate]=useState(travelDate)
    const [busItem,setBusItem]=useState(item)
    const [seatName,setSeatName]=useState('')
    console.log(goingDate);
    console.log("busItem",busItem)
    console.log("seatName:",seatName);
    const { data, loading, error, refetch } = useFetch(`https://hidden-stream-11117.herokuapp.com/buses/seats/${busId}`)

    const travelingDate = travelDate;
    console.log("traveling", travelingDate)
    // console.log(new Date())

    // const isAvailable = (seatNumber) => {
    //     console.log(seatNumber)
    //     const isFound = seatNumber.unavailableDates.some((date) =>
    //         travelingDate.includes(new Date(date))

    //     )
    //     console.log(isFound);
    //     return !isFound;
    // }
    console.log("name 12:",seatName);
    console.log("seat id",selectSeats);

    const handleSelect = (e,SeatName) => {
        const checked = e.target.checked
        const value = e.target.value
        const newValue=value.split(",")
        console.log(newValue);
        setSelectSeats(checked
            ? [...selectSeats, newValue]
            : selectSeats.filter((item) => item !== newValue)
        );
        setSeatName(SeatName)
    };
    console.log(selectSeats);

    const navigate = useNavigate();

    const handleClick = async () => {
        console.log("clicked")
      try {
        await Promise.all(
          selectSeats[0].map((seatId) => {
            console.log(seatId)
            const res = axios.put(`https://hidden-stream-11117.herokuapp.com/seats/availability/${seatId}`, {
              dates: travelingDate,
            });
            return res.data;
          })
        );
        setOpen(false);
        navigate("/payment",{ state: { selectSeats,goingDate,busItem} });
      } catch (err) {}
    };

    return (

        <div className="reserve">
        <div className="rContainer">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="rClose mt-2 mx-2 "
            onClick={() => setOpen(false)}
          />
          <span className='seatTitle'>Select Your Seats</span>
          <div className='rItem'>
          {data.map((item) => (
            <div className="" key={item._id}>
              <div className="rSelectRooms">
                {item.seatNumbers.map((seatNumber) => (
                  <div className="room">
                    <label className='seatName'>{seatNumber.seatName}</label>
                    <input
                      type="checkbox"
                      value={[seatNumber.seatName," /",seatNumber._id]} 
                      // SeatName={seatNumber.seatName}
                      onChange={handleSelect}
                      // disabled={!isAvailable(seatNumber)}
                      className="chkBox"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          </div>
          
          <button onClick={handleClick} className="rButton">
            Reserve Now!
          </button>
        </div>
      </div>
    );
};

export default Booking;