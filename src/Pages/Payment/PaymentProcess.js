import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1tdnBBi6FBKjNNZpraspypb005cwduYGLLtch7bXMzQ1CzrQJgLocZgLuX6Qp3TXbtH37WrelZsUpHm6NqmDbl009D1i6mzH"
);

const PaymentProcess = () => {
  const location = useLocation();
  console.log(location);

  const [seats, setSeats] = useState(location.state.selectSeats);
  const [goDate, setGoDate] = useState(location.state.travelDate);
  const [busItem, setBusItem] = useState(location.state.busProfile);
  const [user] = useAuthState(auth);

  // if (isLoading) {
  //   return <Loading></Loading>;
  // }
  return (
    <div className="mt-10 p-5">
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">Hello, {user?.displayName}</p>
          <h2 className="card-title">Please Pay for {busItem.route} Ticket</h2>
          <p className="font-semibold text-orange-500">
            Ticket Quantity Selected: {seats.length}
          </p>
          <p className="font-semibold text-indigo-500">
            Your Total Price: ${busItem.price * seats.length}
          </p>
          <p className="font-semibold text-green-500">
            Bus Name: {busItem.operator_name}
          </p>
          <p className="font-semibold text-indigo-500">
            Selected Seats:{" "}
            {seats.map((seat) => (
              <span className="seatId text-red-400">{seat.slice(0, 1)}</span>
            ))}
          </p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcess;
