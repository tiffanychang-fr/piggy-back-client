import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import stripeService from "../services/stripe.service.js";

const OfferCard = ({ offer }) => {
  const { getToken } = useContext(AuthContext);

  const handleAccept = async (e) => {
    e.preventDefault();

    try {
      let response = await stripeService.getSessionId(getToken(), offer._id);
      console.log(
        "Response received from stripe server, stripe session Id:",
        response.data
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleRefuse = (e) => {
    e.preventDefault();
    console.log("This offer is refused");
  };

  return (
    <div className="col-md-4">
      <div className="card bg-dark text-light p-2 my-2">
        <div className="card-body">
          <h1>😎</h1>
          <div className="card-title">Offer Id: {offer._id}</div>
          <div className="card-subtitle text-muted">
            €{offer.price} proposed by {offer.proposedBy}
          </div>
          <p className="card-text">{offer.sellerMessage}</p>
          <button
            className="btn btn-light mx-1 text-primary"
            onClick={handleAccept}
          >
            Accept
          </button>
          <button
            className="btn btn-light mx-1 text-danger"
            onClick={handleRefuse}
          >
            Refused
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
