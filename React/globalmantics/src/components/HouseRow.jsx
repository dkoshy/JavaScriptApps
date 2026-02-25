import { useContext } from "react";
import currencyFormatter from "../helpers/CurrencyFormatter";
import navigationContext from "../Navigations/NavigationContext";
import navValues from "../Navigations/NavValues";

const HouseRow = ({ house }) => {
  const {navigate} = useContext(navigationContext);
  return (
    <tr onClick={() => navigate(navValues.HoseDetails,house) } >
      <td>{house.country}</td>
      <td>{house.address}</td>
      {house.price && (
        <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>
          {currencyFormatter.format(house.price)}
        </td>
      )}
    </tr>
  );
};

export default HouseRow;
