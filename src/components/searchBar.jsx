import React, { useState } from 'react';

const SearchBar = function(props){
  const [inputValue, setInput] = useState('')
  const onChangeValue = (e)=>{
    setInput(e.target.value)
  }
  const addSearch = ()=>{
    props.onLicks(inputValue)
    
  }
    return(
        <div className="formInputContainer">
        <input
          type="text"
          className="inputField"
          placeholder="Search city or country"
          name="listOfCountriesInput"
          id="countriesInput"
          value={inputValue}
          onChange={onChangeValue}
        />
        <div className="searchBtn" onClick={addSearch} ></div>
      </div>
    )
}
export default  SearchBar