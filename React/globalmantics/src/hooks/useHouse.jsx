import { useEffect, useState } from "react";
import loadingStatus from "../helpers/LoadingStatus";

const useHouse = () => {
  const [houses, setHouses] = useState([]);
  const [loadingState, setloadingState] = useState(loadingStatus.isLoading);

  useEffect(() => {
    const fetchHouses = async () => {
      setloadingState(loadingStatus.isLoading);
      try {
        const response = await fetch("https://localhost:4000/house");
        const data = await response.json();
        setloadingState(loadingStatus.loaded);
        setHouses(data);
      } catch {
        setloadingState(loadingStatus.hasError);
      }
    };
    fetchHouses();
  }, []);
  return { houses, setHouses, loadingState };
};

export default useHouse;
