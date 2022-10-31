import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import stripeService from "../services/stripe.service.js";
import { loadStripe } from "@stripe/stripe-js";

const OfferCard = ({ offer }) => {
  const { getToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleAccept = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let response = await stripeService.getSessionId(getToken(), offer._id);

      const stripe = await loadStripe(process.env.REACT_APP_STRIPE_KEY);
      stripe
        .redirectToCheckout({
          sessionId: response.data.sessionId,
        })
        .then((result) => {
          console.log(result);
        });
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
            disabled={loading}
          >
            Accept
          </button>
          <button
            className="btn btn-light mx-1 text-danger"
            onClick={handleRefuse}
            disabled={loading}
          >
            Refuse
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
