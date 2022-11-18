import React, { useState, useEffect } from 'react';
import axios from 'axios';
// const Card = function(){
//     const [data, setCountrydata] = useState({hits:[]});
//     useEffect( async () => {
//         const fetchData = async()=>{
//             const result = await axios('https://restcountries.com/v2/name/pakistan')
//             setCountrydata(result.name)
//         }
//         fetchData();

//     },[]);
//     // const data = async()=>{
//     //     await fetch("https://restcountries.com/v2/name/pakistan").then((response) =>response.json())
//     //     console.log(data)
//     // }
//     return(
//         <div className="card">
//           <img src="" className="cardImg" alt="" />
//           <p className="cardCountry">Pakistan</p>
//           <p className="cardCountry">Population: 1 [the paki amar]</p>
//           <p className="cardCountry">Weather: 69</p>
//           <div className="row">
//             <p></p>
//             <div className="downArrow">↓</div>
//           </div>
//           <div className="row">
//             <p>Weather info</p>
//             <div className="downArrow">↓</div>
//           </div>
//         </div>
//     )
// }
// export default Card
function Card() {
    const [data, setData] = useState(0);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(
          'https://restcountries.com/v2/name/somalia',
        )

        // console.log(result.data[0])
        setData(result.data[0]);
  
      };
  
        fetchData();

    },[])
    console.log(data)
    return (
        
        <div className="card">
          <img src='' className="cardImg" alt="" />
          <p className="cardCountry">{data.name}</p>
          <p className="cardCountry">{data.population}</p>
          <p className="cardCountry">Weather: 69</p>
          <div className="row">
            <p></p>
            <div className="downArrow">↓</div>
          </div>
          <div className="row">
            <p>Weather info</p>
            <div className="downArrow">↓</div>
          </div>
        </div>
    
    );
  }
  
  export default Card;