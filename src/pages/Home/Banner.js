import React from "react";
import { useTypewriter } from "react-simple-typewriter";
// import 'react-simple-typewriter/dist/'; 
import "./Banner.css";

const Banner = () => {
  const { text } = useTypewriter({
    words: ["Bus", "Train", "Launch", "Domestic Airline"],
    loop: Infinity,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });



    return (
        <div className='banner'>
            <div className='main-div-banner'>
                <div>
                    <h1>Book Your <br /> Tickets Fors
                        <h2 class='typewriter'> {text}</h2>
                    </h1>

                    <p className='text-center'>Safe, Secure, Reliable Ticketing!</p>
                </div>
            </div>
  </div>
  );
};

export default Banner;