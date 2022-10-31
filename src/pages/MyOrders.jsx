import React from "react";
// import React, { useState, useEffect, useContext } from "react";
// import { AuthContext } from "../context/auth.context";
import OrderCard from "./OrderCard";

function MyOrders() {
  // const { user } = useContext(AuthContext);
  // const [allOrders, setAllOrders] = useState([]);

  // Keep the fakeOrders array as default value for the demo purpose
  const fakeOrders = [
    {
      _id: "imamafakeorderid",
      offer: "iamafakeofferid",
      session: {},
      orderedBy: "iamafakeuserid",
    },
    {
      _id: "imamafakeorderid2",
      offer: "iamafakeofferid2",
      session: {},
      orderedBy: "iamafakeuserid2",
    },
    {
      _id: "imamafakeorderid3",
      offer: "iamafakeofferid3",
      session: {},
      orderedBy: "iamafakeuserid3",
    },
  ];

  return (
    <div>
      <h1>My Orders</h1>
      <div className="container">
        <div className="row mt-4">
          {fakeOrders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}

          {/* {allOrders.length === 0
            ? fakeOrders.map((order) => (
                <OrderCard key={order._id} order={order} />
              ))
            : allOrders.map(
                (offer) =>
                  offer.isAccepted === false && (
                    <OrderCard key={order._id} order={order} />
                  )
              )} */}
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
