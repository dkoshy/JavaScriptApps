import currencyFormatter from "../helpers/CurrencyFormatter";
const HouseRow = ({ house , selectHouse }) => {
  return (
    <tr onClick={() => selectHouse(house)} >
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
