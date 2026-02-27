import { useEffect, useState } from "react";
import loadingStatus from "../helpers/LoadingStatus";

const useBid = (houseId) => {
  const [bids, setBids] = useState([]);
  const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

  useEffect(() => {
    const fetchBidDetails = async () => {
      setLoadingState(loadingStatus.isLoading);
      try {
        const response = await fetch(`https://localhost:4000/bid/${houseId}`);
        const data = await response.json();
        setLoadingState(loadingStatus.loaded);
        setBids(data);
      } catch {
        setLoadingState(loadingStatus.hasError);
      }
    };
    fetchBidDetails();
  }, [houseId]);

  const postNewBid = async (bid) => {
    const response = await fetch("https://localhost:4000/bid", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bid),
    });
    return await response.json();
  };

  const addBid = async (bid) => {
    const newBidPosted = await postNewBid(bid);
    setBids([...bids, newBidPosted ]);
  };

  return { bids, loadingState, addBid };
};

export default useBid;
