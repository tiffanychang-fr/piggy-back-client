import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import stripeService from "../../services/stripe.service.js";

function StripeSuccess() {
  const { user, getToken } = useContext(AuthContext);
  const params = useParams();
  const offerId = params.offerId;

  const navigate = useNavigate();

  useEffect(() => {
    stripeService
      .stripeSuccessRequest(user, offerId)
      .then((response) => {
        console.log("stripe success response", response.data);

        if (response.data.success) {
          navigate("/seller");
        } else {
          navigate("/stripe/cancel");
        }
      })
      .catch((error) => console.log(error));
  }, [user, getToken, offerId, navigate]);

  return (
    <div className="container">
      <div className="col">
        <h2 className="text-center p-5">Payment Success. {offerId}</h2>
      </div>
    </div>
  );
}

export default StripeSuccess;
