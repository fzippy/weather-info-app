import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Card(props) {
    const [data, setData] = useState([]);
    const [weather, setWeather] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(
          `https://restcountries.com/v2/name/${props.country}`,
        )
        

        // console.log(result.data[0])
        setData(result.data[0]);
  
      };
  
      fetchData();

    },[])
    // console.log(data)
    return (
        
        <div className="card">
          <div className='imgContainer cardImg'>
            <img src={data.flag} className="cardFlag" alt="" />

          </div>
          <p className="cardCountry"> <strong>Name:</strong> {data.name}</p>
          <p className="cardCountry"> <strong>Popultation:</strong> {data.population}</p>
          <p className="cardCountry"> <strong>Weather:</strong> 69</p>
          <div className="row" style={{margin:'10px 0'}}>
            <p> <strong>More infomation about</strong> {data.name}</p>
            <div className="downArrow">↓</div>
          </div>
          <div className="row">
            <p><strong>More weather infomation</strong></p>
            <div className="downArrow">↓</div>
          </div>
        </div>
    
    );
  }
  
  export default Card;