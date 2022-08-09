
import React, { useEffect,useState } from 'react';
import Search from '../pages/Searching/Search';
import './BussTiceket.css'

const BussTicket = () => {
  // const [busData,setBusData]=useState([]);
  const array=[{
    name:'Hanif'
  },{
    name:'Ena'
  },{
    name:'Shamoli'
  },{
    name:'GreenLine'
  }];
  // setBusData(array)


   
    return (
        <div className='busTiceket'>
          <h1>hi this is md</h1>
            <div className='mt-5 pt-5'>
                <Search></Search>
              <div className='BusTicket'>
                <div className='filter'>
                      <div>
                        <h3>Quick Filter</h3>
                          <ul>
                            
                             <li><input type="checkbox" value={'First Class'} />  First Class</li>
                             <li><input type="checkbox" value={'First Class'} />  Second Class</li>
                             <li><input type="checkbox" value={'First Class'} />  AC</li>
                             <li><input type="checkbox" value={'First Class'} />  Non AC</li>
                             <li><input type="checkbox" value={'First Class'} />  Sleeper</li>
                          </ul>
                      </div>
                      <div>
                        <h3>Travel Oparator</h3>
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
                        array.map(item=><div className='Each-bus'>
                              <h1>Name:{item.name}</h1>
                              <div>
                              <h1>Name:{item.name}</h1>
                              </div>
                              <div></div>
                               
                        </div>)
                    }
                </div>


              </div>
            </div>
        </div>
    );
};

export default BussTicket;
