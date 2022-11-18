import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="formInputContainer">
        <input
          type="text"
          className="inputField"
          placeholder="Search city or country"
        />
        <div className="searchBtn"></div>
      </div>
    </div>
  );
}

export default App;
