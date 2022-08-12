import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../Searching/Search.css';
import BusItem from './BusItem';
const BusList = () => {
    const location=useLocation();
    console.log(location)
    const [email,setEmail]=useState(location.state.text);
    console.log(email)
    const [to,setTo]=useState(location.state.text2);
    const [travel,setTravel]=useState(location.state.select);
    const [ret,setRet]=useState(location.state.select2);
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000//purchase?email=${email}`)
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])
    return (
        <div className='busList'>
            <h2 className='route-name text-center'>{email}-{to}</h2>
            <h2 className='text-center'>List of the Buses for this Route:</h2>
                                <BusItem>
                                </BusItem>

        </div>
    );
};

export default BusList;