import currencyFormatter from "../helpers/CurrencyFormatter";
import { useNavigate } from "react-router";

const HouseRow = ({ house }) => {
  const navigate  = useNavigate();
  return (
    <tr onClick={() => navigate("/house", { state: { house } })}>
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
