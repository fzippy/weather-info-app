import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/searchBar";
import Card from "./components/card";

function App() {
  const [countriesArray, updateCountries] = useState([]);
  const array = ["hello"];
  const getData = (data) => {
    updateCountries([...countriesArray, data]);
    console.log("data is this:" + data);
    console.log(countriesArray);
  };
  const dataArray = countriesArray.map((item, i) => {
    return <Card country={item} city={item} key={i} />;
  });

  return (
    <div className="container">
      <SearchBar onLicks={getData} />
      <div className="cardContainer">
        {dataArray}
        {/* <Card country="United Kingdom"></Card> */}
      </div>
    </div>
  );
}

export default App;
