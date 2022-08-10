
import React, { useEffect,useState } from 'react';
import Search from '../pages/Searching/Search';
import './BussTiceket.css'

const BussTicket = () => {
  const [bus,setBus]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/busInfo')
    .then(response => response.json())
    .then(data =>setBus(data))
  },[])

    return (
        <div className='busTiceket'>
          <h1>hi this is md</h1>
            <div className='mt-5 pt-5'>
                <Search></Search>
              <div className='BusTicket'>
                <div className='filter'>
                      <div>
                        <p>Quick Filter</p>
                          <ul>
                            
                             <li><input type="checkbox" value={'First Class'} />  First Class</li>
                             <li><input type="checkbox" value={'First Class'} />  Second Class</li>
                             <li><input type="checkbox" value={'First Class'} />  AC</li>
                             <li><input type="checkbox" value={'First Class'} />  Non AC</li>
                             <li><input type="checkbox" value={'First Class'} />  Sleeper</li>
                          </ul>
                      </div>
                      <div>
                        <p>Travel Oparators</p>
                          <ul>
                             <li><input type="checkbox" value={'First Class'} />  Hanif</li>
                             <li><input type="checkbox" value={'First Class'} />  Ena</li>
                             <li> <input type="checkbox" value={'First Class'} />  Shamoli</li>
                             <li><input type="checkbox" value={'First Class'} />  GreenLine</li>
                             <li> <input type="checkbox" value={'First Class'} />  Silk Line</li>
                          </ul>
                      </div>
                </div>
                <div className='Results'>
                    {
                        bus.map(item=><div className='Each-bus'>
                              {/* <h1>Name:{item.operator_name}</h1> */}
                              <div>
                                <p>Boarding Point: {item.boarding_point}</p>
                                <p>Bus Class: {item.bus_class}</p>
                                <p>Bus Type: {item.bus_type}</p>
                              </div>
                              <div>
                                  <p>Coach Number: {item.coach_number}</p>
                                  <p>Departure Time: {item.departure_time}</p>
                                  <p>Dropping Point: {item.dropping_point}</p>
                              </div>
                              <div>
                              <p>Operator Name: {item.operator_name}</p>
                              <p>Price: {item.price}</p>
                              <p>Route: {item.route}</p>
                              </div>
                              <div>
                              <p>Arrival Time: {item.arrival_time}</p>
                              <p>Available Seats: {item.available_seats}</p>
                              <button className="btn bg-danger">Booking</button>
                              </div>
                        </div>)
                    }
                </div>

              </div>
            </div>
        </div>
    );
};

export default BussTicket;
