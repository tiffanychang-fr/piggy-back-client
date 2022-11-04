import React from "react";

const OrderCard = ({ order }) => {
  return (
    <div className="col-md-4">
      <div className="card bg-dark text-light p-2 my-2">
        <div className="card-body">
          <h1>🐷</h1>
          <div className="card-title">Order Id: {order._id}</div>
          <div className="card-subtitle text-muted mb-3">
            €{order.offer.price} paid on {order.createdAt.split("T")[0]}
          </div>
          <p className="card-text">Your Piggy is @{order.soldBy?.username}🎈</p>
          <p className="card-text mb-3">
            ☎️{order.soldBy?.phoneNumber} 💌{order.soldBy?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
