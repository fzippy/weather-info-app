const SearchBar = function(){
    return(
        <div className="formInputContainer">
        <input
          type="text"
          className="inputField"
          placeholder="Search city or country"
        />
        <div className="searchBtn"></div>
      </div>
    )
}
export default  SearchBar