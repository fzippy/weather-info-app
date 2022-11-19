import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Card(props) {

  const [coordinates, getcoordinates] = useState([]);
  const [data, setData] = useState([]);
  const [weather, setWeather] = useState([]);
  

      const fetchCountryData = async ()=>{
        const latAndLong = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${props.country}&appid=3001171d64b6cd2480ec2312c708d488`
        )
        getcoordinates([latAndLong.data[0].lat, latAndLong.data[0].lon])
        fetchData(latAndLong.data[0].country)
      }
      const fetchData = async (country) => {
        const result = await axios.get(
          `https://restcountries.com/v2/name/${country}`,
        )
        // console.log(latAndLong.data[0].lat)
        setData(result.data[0]);

      };
      fetchData(latAndLong.data[0].country);
  
      // fetchData(coordinates[2]);



    useEffect(() => {
      console.log("MOUNTED")
      fetchCountryData();
      

    }, [])
    useEffect(() => {
      console.log(coordinates,"UPDATED MOUNTED")
      // fetchCountryData();
    }, [coordinates])
    console.log(coordinates)
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