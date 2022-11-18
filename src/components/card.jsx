const Card = function(){
    return(
        <div className="card">
          <img src="" className="cardImg" alt="" />
          <p className="cardCountry">Pakistan</p>
          <p className="cardCountry">Population: 1 [the paki amar]</p>
          <p className="cardCountry">Weather: 69</p>
          <div className="row">
            <p>Info</p>
            <div className="downArrow">↓</div>
          </div>
          <div className="row">
            <p>Weather info</p>
            <div className="downArrow">↓</div>
          </div>
        </div>
    )
}
export default Card