import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import stripeService from "../services/stripe.service.js";

const OrderCard = ({ order }) => {
  //   const { getToken } = useContext(AuthContext);

  return (
    <div className="col-md-4">
      <div className="card bg-dark text-light p-2 my-2">
        <div className="card-body">
          <h1>😎</h1>
          <div className="card-title">Order Id: {order._id}</div>
          {/* <div className="card-subtitle text-muted">
            €{order.price} proposed by {order.proposedBy}
          </div>
          <p className="card-text">{order.sellerMessage}</p> */}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
