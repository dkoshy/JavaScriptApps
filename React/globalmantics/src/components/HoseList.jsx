import loadingStatus from "../helpers/LoadingStatus";
import useHouse from "../hooks/useHouse";
import HouseRow from "./HouseRow";
import LoadingIndicator from "./LoadingIndicator";
import ErrorBoundary from "./ErrorBoundary";

/*
const houseArray = [
  {
    id: 1,
    address: "12 valley of kings , Geneva",
    country: "Switzerland",
    Price: 900000,
  },
  {
    id: 2,
    address: "89 Road of Frocks , Bern",
    country: "Switzerland",
    Price: 500000,
  },
];*/

const HouseList = () => {
  /*
  const [houses, setHouses] = useState(houseArray);

  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch("https://localhost:4000/house");
      const data = await response.json();
      setHouses(data);
    };
    fetchHouses();
  },[]);
  */
  const { houses, setHouses, loadingState } = useHouse();

  const addNewHouse = () => {
    setHouses([
      ...houses,
      {
        id: 3,
        address: "41 Corner Street , Kzybar",
        country: "Switzerland",
        price: 407000,
      },
    ]);
  };
  if (loadingState != loadingStatus.loaded)
    return <LoadingIndicator loadingStatus={loadingState} />;

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on market.
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ErrorBoundary fallback="Error loading house rows!">
            {houses.map((h) => (
              <HouseRow key={h.id} house={h}/>
            ))}
          </ErrorBoundary>
        </tbody>
      </table>
      <button type="button" onClick={addNewHouse} className="btn btn-primary ">
        Add
      </button>
    </>
  );
};

export default HouseList;
