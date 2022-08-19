
import React, { useEffect,useState } from 'react';
import Search from '../pages/Searching/Search';
import './BussTiceket.css'

const BussTicket = () => {

  const [bus,setBus]=useState([]);
  const [busdata,setBusdata]=useState([]);
  const array = [...busdata]
  console.log(array)

  useEffect(()=>{
<<<<<<< HEAD
    fetch('https://hidden-stream-11117.herokuapp.com/busesInfo')
=======
    fetch("https://intense-dawn-70089.herokuapp.com/busInfo")
      .then((response) => response.json())
      .then((data) => setBus(data));
    fetch('https://hidden-stream-11117.herokuapp.com/busInfo')
>>>>>>> b978e430a8dfb643d7081dbafd3e1b3507bb83b9
    .then(response => response.json())
    .then(data =>setBus(data))
  },[])
    const [hyundai, setHyundai] =useState(true);
    const [hino, setHino] =useState(true);
    const [ak1j, setAk1j] =useState(true);
    const [scania, setScania] =useState(true);

    const handleChange=(data) =>{
      if(data==" Hyundai Universe")
      {
        if(hyundai==true){
          console.log(data,"our value")
          const result = bus.filter(word => 
            { return  word.bus_class === data
             console.log(word.bus_class)  
          }
            );
            setBus(result)
            // setHino(false)
            // setAk1j(false)
            // setScania(false)
            // console.log(result)
            // setBus (array);
        }
  setHyundai(!hyundai)
      }
      if(data==" Hino 1J Pluss")
      {
        if(hino==true){
          console.log(data,"our value")
          const result = bus.filter(word => 
            { return  word.bus_class===data
               
          }
            );
            setBus(result)
            // setHyundai(false)
            // setAk1j(false)
            // setScania(false)
        }
        setHino(!hino)
      }
      if(data=="AK1J Super Plus")
      {
        if(ak1j==true){
          console.log(data,"our value")
          const result = bus.filter(word => 
            { return  word.bus_class===data
               
          }
            );
            setBus(result)
            // setHyundai(false)
            // setHino(false)
            // setScania(false)
        }
        setAk1j(!ak1j)
        // setBus(!result)
      }
      if(data==" Scania")
      {
        if(scania==true){
          console.log(data,"our value")
          const result = bus.filter(word => 
            { return  word.bus_class===data
               
          }
            );
            setBus(result)
            // setHyundai(false)
            // setHino(false)
            // setAk1j(false)
        }
        setScania(!scania)
      }
    }
    return (
        <div className='busTiceket'>
          <h1>hi this is md</h1>
            <div className='mt-5 pt-5'>
                <Search></Search>
              <div className='BusTicket'>
                <div className='filter'>
                <div>
                        <p>Buss Class</p>
                          <ul>
                            
                             <li><input type="checkbox" value={'Hyundai Universe'} onChange={()=>handleChange(" Hyundai Universe")} /> Hyundai Universe</li>
                             <li><input type="checkbox" value={'Hino 1J Pluss'} onChange={()=>handleChange(" Hino 1J Pluss")}/>  Hino 1J Pluss</li>
                             <li><input type="checkbox" value={'AK1J Super Plus'} onChange={()=>handleChange("AK1J Super Plus")}/>  AK1J Super Plus</li>
                             {/* <li><input type="checkbox" value={'Hyundai Universe'} onChange={()=>handleChange("Hyundai Universe")}/>  Hyundai Universe</li> */}
                             <li><input type="checkbox" value={'Scania'} onChange={()=>handleChange(" Scania")}/>  Scania</li>
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
                              <p></p>
                              </div>
                              <div>
                              <p>Arrival Time: {item.arrival_time}</p>
                              <p>Available Seats: {item.available_seats}</p>
                              <button className="btn bg-success m-2">Booking</button>
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
