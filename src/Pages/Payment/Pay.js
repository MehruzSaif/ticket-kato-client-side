import React, { useState } from 'react';
import './Pay.css'
import StripeCheckout from 'react-stripe-checkout';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useHistory} from "react-router"
const KEY = "pk_test_51L3gyJLDZEIIquK1KUKYFHAFY2FsrK2IueqkPPebXK0sCf515AMMCw4X2tK379IS5j7FjexPujtEnr2cXmrfFVvd00Vzj2umDN"


const Pay = ({ ticketPriceNow }) => {
    const price = ticketPriceNow*100;
    console.log("price", price)
    // const history=useHistory()
    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate();
    const onToken = (token) => {
        console.log(token)
        setStripeToken(token);
    }
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("https://hidden-stream-11117.herokuapp.com/create-payment-intent", {
                    tokenId: stripeToken.id,
                    amount: price,
                });
                console.log(res.data);
                // history.push("/success")
                
            }
            catch (err) {
                console.log(err)
            }
        };
        stripeToken && makeRequest
    }, [stripeToken])

    return (
        <div className='pay'>
            {stripeToken?(<span className='successFul'>Successful !</span>):
                     <StripeCheckout
                     name="Ticket-Kato"
                     billingAddress
                     shippingAddress
                     amount={price}
                     // description={price}
                     token={onToken}
                     stripeKey={KEY}
                 >
                     <button className='payButton'>Pay Now</button>
                 </StripeCheckout>   
        
        }

        </div>
    );
};

export default Pay;