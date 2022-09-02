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
  const [goingDate, setGoingDate] = useState(travelDate)
  const [busItem, setBusItem] = useState(item)
  const [datePro,setDatePro]=useState([])
  const { data, loading, error, refetch } = useFetch(`https://hidden-stream-11117.herokuapp.com/buses/seats/${busId}`)
  const newDate=travelDate.toISOString().split('T')[0]
  const newDateX=newDate + 'T00:00:00.000Z';
  const isAvailable = (seatNumber) => {
    const isFound = seatNumber.unavailableDates.some((date =>
      newDateX.includes(date))
    )
    return isFound;
  }

  const handleSelect = (e) => {
    const checked = e.target.checked
    console.log(checked);
    const value = e.target.value
    console.log(value)
    if(checked===true){
      setSelectSeats([...selectSeats, value])
    }
    else{
      setSelectSeats(selectSeats.filter(i => i !== value))
    }
  };
  console.log(selectSeats)

  const navigate = useNavigate();

  const handleClick = async () => {

    try {
      await Promise.all(
        selectSeats.map((Id) => {
          const newValue = Id.split(",")
          console.log(newValue);
          console.log(newValue[2])
          const res = axios.put(`https://hidden-stream-11117.herokuapp.com/seats/availability/${newValue[2]}`, {
            dates: newDateX,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/payment", { state: { selectSeats, goingDate, busItem } });
    } catch (err) { }
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
                      value={[seatNumber.seatName, " /", seatNumber._id]}
                      onChange={(e)=>handleSelect(e)}
                      disabled={isAvailable(seatNumber)}
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