import navValues from "../Navigations/NavValues";
import HouseList from "./HoseList";
import House from "./House";

const ComponentPicker = ({ navLocation }) => {
  switch (navLocation) {
    case navValues.HouseList:
      return <HouseList />;
    case navValues.HoseDetails:
      return <House />;
    default:
      return <h2>No components matches the value {navLocation} </h2>;
  }
};

export default ComponentPicker;