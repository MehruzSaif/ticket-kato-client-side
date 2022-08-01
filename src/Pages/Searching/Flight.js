import React, { useEffect, useState } from 'react';
import { BiBus } from "react-icons/bi";
import { IoMdTrain } from "react-icons/io";
import { FaPlaneDeparture } from "react-icons/fa";
import { RiShipLine } from "react-icons/ri";
import './Search.css';
import { DatePicker } from 'antd';
import "antd/dist/antd.css";
import axios from 'axios';
import { Link,Outlet } from "react-router-dom";

const Flight = () => {
    const [districts, setDistricts] = useState([]);
    console.log(districts)
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const loadDistricts = async () => {
            const response = await axios.get('https://bdapis.herokuapp.com/api/v1.1/districts');
            console.log(response.data.data);
            setDistricts(response.data.data)
        }
        loadDistricts();
    }, [])

    const onChangeHandler = (text) => {
        let matches = []
        if (text.length > 0) {
            matches = districts.filter(district => {
                console.log(district)
                const regex = new RegExp(`${text}`, 'gi');
                return district.district.match(regex)
            })
        }
        console.log('Matches: ', matches)
        setSuggestions(matches)
        setText(text);
    }

    const onSuggestionHandler = (text) => {
        setText(text)
        setSuggestions([])
    }
    return (
        <div>
        <div className='d-flex justify-content-evenly text-center search-content mt-0'>
        <div>
            <label for="From" class="form-label mt-4 fs-4">From</label>
            <input type="text"
                onChange={e => onChangeHandler(e.target.value)}
                value={text}
                onBlur={() => {
                    setTimeout(() => {
                        setSuggestions([])
                    }, 100);
                }}
                class="form-control"
                name='From'
                placeholder='        Departure Place'
                required />
        </div>

        <div>
            <label for="To" class="form-label mt-4 fs-4">To</label>
            <input type="text"
                // onChange={e => onChangeHandler(e.target.value)}
                // value={text}
                class="form-control"
                name='To'
                placeholder='          Arrival Place'
                required />
        </div>
        <div>
            <label for="date" class="form-label mt-4 fs-4">Travel Date</label><br />
            <DatePicker className='departing' />
        </div>
        <div>
            <label for="date" class="form-label mt-4 fs-4">Return Date</label><br />
            <DatePicker className='returning' />
        </div>
    </div>
        <div className='from-text ' >{suggestions && suggestions.map((suggestion, i) =>
            <div
                onClick={() => onSuggestionHandler(suggestion.district)}
                className='suggestion' key={i}>{suggestion.district}</div>
        )}</div>

        <div className='d-flex justify-content-center mt-4'>
            <button className='search-button'>Search Flights</button>
        </div>
    </div>
    );
};

export default Flight;