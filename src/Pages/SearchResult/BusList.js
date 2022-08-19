import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import BusItem from './BusItem';
import './BusList.css'
import SearchBanner from './SearchBanner';
const BusList = () => {
    const location = useLocation();
    console.log(location)
    const [departure, setDeparture] = useState(location.state.text);
    const [arrival, setArrival] = useState(location.state.text2);
    const [travelDate, setTravelDate] = useState(location.state.select);
    const [returnDate, setReturnDate] = useState(location.state.select2);

    const { data, loading, error, refetch } = useFetch(`https://hidden-stream-11117.herokuapp.com/buses?departure_city=${departure}&arrival_city=${arrival}`)
    console.log(data);
    return (
        <div className='BusListContainer'>
            <SearchBanner></SearchBanner>
            <p className='text-center fs-4 busroute'>Search Result For: {departure}-{arrival}</p>
            <div className='listContainer'>
                
                <div className='listWrapper'>
                    
                    <div className='listSearch'>
                        
                        <div className='IsItem'>
                            <h4 className='text-center refine'>Refine Search</h4>
                            <div>
                                <p className='filterTitle'>Operators</p>
                                <p className='filterLine'><span></span></p>
                                <div className='filterProperty'>
                                    <p>Hanif Enterpris</p>
                                    <p>Ena Transport (Pvt) Ltd</p>
                                    <p>Green Line Paribahan</p>
                                    <p>Agomony Express</p>
                                    <p>Nabil Paribahan</p>
                                    <p>S.R Travels (Pvt) Ltd</p>
                                    <p>Shymoli Paribahan</p>
                                </div>

                            </div>
                            <div>
                                <p className='filterTitle'>Bus Type</p>
                                <p className='filterLine'><span></span></p>
                                <div className='filterProperty'>
                                    <p>AC</p>
                                    <p>Non AC</p>
                                </div>


                            </div>
                            <div>
                                <p className='filterTitle'>Boarding Point</p>
                                <p className='filterLine'><span></span></p>
                                <div className='filterProperty'>
                                    <p>Kamarpara Bus Point</p>
                                    <p>Tarminal Bus Point</p>
                                    <p>Pirganj Bus Point</p>
                                </div>

                            </div>
                            <div>
                                <p className='filterTitle'>Dropping Point</p>
                                <p className='filterLine'><span></span></p>
                                <div className='filterProperty'>
                                    <p>Technical Bus Point</p>
                                    <p>Gabtoli Bus Point</p>
                                    <p>Kallyanpur Bus Point</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='listResult'>
                        
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