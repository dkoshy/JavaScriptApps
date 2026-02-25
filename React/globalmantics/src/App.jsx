import { useState } from "react";
import Banner from "./components/Banner";
import HouseList from "./components/HoseList";
import HouseDetails from "./components/House";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

function App() {
  const [selectedHouse, setSelectedHouse] = useState();

  const setSelectedHouseWrapper = (houseSelected)=>{
    setSelectedHouse(houseSelected);
  }
  return (
      <ErrorBoundary fallback="something went wrong!">
        <Banner>
          <div>Providing houses all over the world.</div>
        </Banner>
        {selectedHouse ? (
          <HouseDetails house={selectedHouse} />
        ) : (
          <HouseList selectHouse={setSelectedHouseWrapper} />
        )}
      </ErrorBoundary>
  );
}

export default App;
