import React, { useState } from "react";
import "./Payment.css";
import { Link, useLocation } from "react-router-dom";
import { format } from "date-fns";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  console.log(location);
  const [selectSeats, setSelectSeats] = useState(location.state.selectSeats);
  const [travelDate, setTravelDate] = useState(location.state.goingDate);
  const [busProfile, setBusProfile] = useState(location.state.busItem);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [gender, setGender] = useState();

  console.log(selectSeats);
  console.log(travelDate);
  console.log(busProfile);
  {
    selectSeats.map((seat) => {
      console.log(seat);
    });
  }
  const { data, loading, error, refetch } = useFetch(
    `http://localhost:8800/seats/singleSeat/${selectSeats}`
  );
  const navigate = useNavigate();

  console.log(data);
  const handlePayment = () => {
    navigate("/paymentProcess", {
      state: { selectSeats, travelDate, busProfile },
    });
  };

  return (
    <div>
      <div className="journeyInfo">
        <div className="journeyDetails">
          <p className="jTitle text-center">Journey Details</p>

          <div className="jContainer">
            <p className="text-center jOperator">{busProfile.operator_name}</p>
            <p className="route">{busProfile.route}</p>

            <p className="jDep">
              Travel Date:{`${format(travelDate, "dd-MM-yyyy")}`}{" "}
            </p>
            <p className="jDate jCoa">
              Departure Time:{busProfile.departure_time}{" "}
            </p>
            <p className="jArr">Arrival Time:{busProfile.arrival_time}</p>

            <p className="jArr">Coach Number:{busProfile.coach_number}</p>
            <p className="jTic">Tickets:</p>
            {selectSeats.map((seat) => (
              <p className="seatId">{seat}</p>
            ))}
            <p className="jp ">
              Price:{busProfile.price}
              <small className="ml-3 jp2">(Per Ticket)</small>
            </p>
          </div>
        </div>
        <div className="passengerDetails">
          <p className="pTitle">Passenger Information</p>
          <form onSubmit={handlePayment} className="text-center">
            <label>Name</label>
            <br></br>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Name"
              class="nameField mb-4 mx-4"
              name="name"
            />
            <br></br>
            <label>Email</label>
            <br></br>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
              class="nameField mb-4 mx-4"
              name="email"
            />
            <br></br>
            <label>Gender</label>
            <br></br>
            <input
              type="text"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              placeholder=" Your Gender"
              class="nameField mb-4 mx-4"
              name="description"
              required
            />
            <br></br>
            <label>Phone</label>
            <br></br>
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="Phone"
              class="nameField mb-4 mx-4"
              name="phone"
            />
            <br></br>
            <p className="payment">Payment Method</p>
            <br></br>
          </form>

          <button
            onClick={handlePayment}
            className="btn btn-primary text-center w-24 ml-24"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
