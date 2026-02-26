import currencyFormatter from "../helpers/CurrencyFormatter";
import loadingStatus from "../helpers/LoadingStatus";
import useBid from "../hooks/useBid";
import LoadingIndicator from "./LoadingIndicator";
import NewBid from "./NewBid";

const Bid = ({ houseId }) => {
  const { bids, loadingState, addBid } = useBid(houseId);
  
  if (loadingState != loadingStatus.loaded)
    return <LoadingIndicator loadingStatus={loadingState} />;

  return (
    <>
      <div className="row mt-4">
        <div className="col-12">
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Bidder</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((b) => (
                <tr key={b.id}>
                  <td>{b.bidder}</td>
                  <td>{currencyFormatter.format(b.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
     <NewBid houseId={houseId} addBid={addBid}/>
    </>
  );
};
export default Bid;
