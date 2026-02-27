const BidFormAction = ({ houseId, addBid }) => {
  const submitNewBid = async (formdata) => {
    await addBid({
      houseId: houseId,
      amount: formdata.get("amount"),
      bidder: formdata.get("bidder"),
    });
  };
  return (
    <form action={submitNewBid} className="row row-cols-lg-auto">
      <div className="col-5">
        <input
          type="text"
          id="bidder"
          name="bidder"
          placeholder="bidder"
          className="h-100 form-control"
        ></input>
      </div>
      <div className="col-5">
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="amount"
          className="h-100 form-control"
        ></input>
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
};
export default BidFormAction;
