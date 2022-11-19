import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/searchBar";
import Card from "./components/card";

function App() {
  return (
    <div className="container">
      <SearchBar />
      <div className="cardContainer">
        <Card country="Slough"></Card>
        {/* <Card country="United Kingdom"></Card> */}
      </div>
    </div>
  );
}

export default App;
