import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Loading from '../shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation } from 'react-router-dom';


const CheckoutForm = () => {
   const stripe = useStripe();
   const elements = useElements();
   const [cardError, setCardError] = useState("");
   const [success, setSuccess] = useState("");
   const [processing, setProcessing] = useState(false);
   const [transactionId, setTransactionId] = useState("");
   const [clientSecret, setClientSecret] = useState("");

   const [user] = useAuthState(auth);
   console.log(user);
   const location = useLocation();

   console.log(location);

   const [seats, setSeats] = useState(location.state.selectSeats);
   const [goDate, setGoDate] = useState(location.state.travelDate);
   const [busItem, setBusItem] = useState(location.state.busProfile);

   const price = busItem.price;



   // const {displayName, email} = user; 


   useEffect(() => {
     fetch("http://localhost:8800/create-payment-intent", {
       method: "POST",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify({ price }),
     })
       .then((res) => res.json())
       .then((data) => {
         if (data?.clientSecret) {
           setClientSecret(data.clientSecret);
         }
       });
   }, [price]);

   if (processing) {
     return <Loading></Loading>;
   }

   const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error?.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    setProcessing(true);

    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
         //  billing_details: {
         //    name: displayName,
         //    email: email,
         //  },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent);
      setSuccess("Congrats! Your payment is completed.");
      console.log(clientSecret);
    }
   }
   return (
     <>
       <div className="w-full mx-auto">
         <form onSubmit={handleSubmit}>
           <CardElement
             options={{
               style: {
                 base: {
                   fontSize: "16px",
                   color: "#424770",
                   "::placeholder": {
                     color: "#aab7c4",
                   },
                 },
                 invalid: {
                   color: "#9e2146",
                 },
               },
             }}
           />
           <button
             className="p-2 rounded-full border-2 text-white bg-green-500 w-52 mx-auto justify-center grid mt-12"
             type="submit"
             
           >
             Pay Now
           </button>
         </form>
         {cardError && <p className="text-red-500">{cardError}</p>}
         {success && (
           <div className="text-green-500">
             <p>{success} </p>
           </div>
         )}
       </div>
     </>
   );
};

export default CheckoutForm;