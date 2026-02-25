import navValues from "../Navigations/NavValues";
import HouseList from "./HoseList";
import House from "./House";

const ComponentPicker = ({ navValue }) => {
  switch (navValue) {
    case navValues.HouseList:
      return <HouseList />;
    case navValues.HoseDetails:
      return <House />;
    default:
      return <h2>No components matches the value {navValue} </h2>;
  }
};

export default ComponentPicker;