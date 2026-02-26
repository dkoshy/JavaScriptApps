import { useState } from "react";

const NewBid = ({ houseId , addBid }) => {
  const emptyBid = {
    houseId: houseId,
    bidder: "",
    amount: 0,
  };
  const [newBid, setNewBid] = useState(emptyBid);
 
  const onSubmitNewBid = () => {
    const submitdata = async () => {
      await addBid(newBid);
      setNewBid(emptyBid);
    };
    submitdata();
  };

  return (
    <div className="row">
      <div className="col-5">
        <input
          type="text"
          className="h-100 form-control"
          id="bidder"
          name="bidder"
          placeholder="Bidder"
          value={newBid.bidder}
          onChange={(e) =>
            setNewBid({ ...newBid, [e.target.name]: e.target.value })
          }
        ></input>
      </div>
      <div className="col-5">
        <input
          type="number"
          className="h-100 form-control"
          id="amount"
          name="amount"
          placeholder="Amount"
          value={newBid.amount}
          onChange={(e) =>
            setNewBid({ ...newBid, [e.target.name]: e.target.value })
          }
        ></input>
      </div>
      <div className="col-2">
        <button className="btn btn-primary" onClick={onSubmitNewBid}>
          Add
        </button>
      </div>
    </div>
  );
};

export default NewBid;
