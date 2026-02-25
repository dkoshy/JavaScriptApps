import { BrowserRouter, Route, Routes } from "react-router";
import Banner from "./components/Banner";
import ErrorBoundary from "./components/ErrorBoundary";
import HouseList from "./components/HoseList";
import House from "./components/House";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback="something went wrong!">
        <Banner>
          <div>Providing houses all over the world.</div>
        </Banner>
        <Routes>
          <Route index element={<HouseList />} />
          <Route path="house" element={<House />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
export default App;
