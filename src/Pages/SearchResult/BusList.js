import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import BusItem from './BusItem';
import './BusList.css'
import RefineSearch from './RefineSearch';
import SearchBanner from './SearchBanner';
const BusList = () => {
    const location = useLocation();
    console.log(location)
    const [departure, setDeparture] = useState(location.state.text);
    const [arrival, setArrival] = useState(location.state.text2);
    const [travelDate, setTravelDate] = useState(location.state.select);
    const [returnDate, setReturnDate] = useState(location.state.select2);
    const [operator, setOperator] = useState('');

    const { data, loading, error, refetch } = useFetch(`https://hidden-stream-11117.herokuapp.com/buses?departure_city=${departure}&arrival_city=${arrival}`)
    console.log(data);

    const handleOperator = () => {
        data.slice(0, 1).map(item => (
            setOperator(item.operator_names[0])
        ))
    }
    console.log(operator);
    return (
        <div className='BusListContainer'>
            <SearchBanner></SearchBanner>

            <p className='text-center fs-4 busRoute'>Search Result For: {departure}-{arrival} </p>
            <div className='d-flex justify-content-center'>

            </div>

            <div className='listContainer'>

                <div className='listWrapper'>
                    <div className='listSearch'>
                        <p className='text-center refine'>Refine Search</p>
                        <p className='filterTitle'>Operators</p>
                        <p className='filterLine'><span></span></p>

                        {loading ? "loading" : <>
                            {data.slice(0, 1).map(item => (
                                <div className='IsItem'>
                                    <div>
                                        <div className='filterProperty'>
                                            <p>{item.operator_names[0]}</p>
                                            <p>{item.operator_names[1]}</p>
                                            <p>{item.operator_names[2]}</p>
                                            <p>{item.operator_names[3]}</p>
                                            <p>{item.operator_names[4]}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>}
                        <p className='filterTitle'>Bus Class</p>
                        <p className='filterLine'><span></span></p>
                        {loading ? "loading" : <>
                            {data.slice(0, 1).map(item => (
                                <div className='IsItem'>
                                    <div>
                                        <div className='filterProperty'>
                                            <p>{item.bus_classes[0]}</p>
                                            <p>{item.bus_classes[1]}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>}
                    </div>
                    <div className='listResult'>
                        <div className='d-flex justify-content-between'>
                            <p className='text-center travelDate'>Travel Date:{`${format(travelDate, "dd/MM/yyyy")}`}</p>
                            <p className='text-center returnDate'>Return Date:{`${format(returnDate, "dd/MM/yyyy")}`}</p>
                        </div>
                        {loading ? "loading" : <>
                            {data.map(item => (
                                <BusItem
                                    item={item}
                                    key={item._id}
                                />
                            ))}
                        </>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusList;