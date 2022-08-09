import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
/* import 'react-simple-typewriter/dist/'; */
import './Banner.css';

const Banner = () => {

    const { text } = useTypewriter({
        words: ['Bus', 'Train', 'Launch', 'Domestic Airline'],
        loop: Infinity,
        onLoopDone: () => console.log(`loop completed after 3 runs.`),
    })

    return (
        <div className='banner'>
            <div className='main-div-banner'>
                <div>
                    <h1>Book Your <br /> Tickets For   
                        <span className='typewriter'> {text}</span>
                    </h1>

                    <p>Safe, secure, reliable ticketing.Your ticket to live entertainment!</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;