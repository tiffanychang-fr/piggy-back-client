import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import OrderCard from "../components/Cards/OrderCard";
import orderService from "../services/order.service";

function MyOrders() {
  const { user } = useContext(AuthContext);
  const [allOrders, setAllOrders] = useState([]);

  // Render all the orders
  useEffect(() => {
    orderService
      .getAllOrders(user)
      .then((response) => {
        console.log("All Orders:", response.data);
        setAllOrders(response.data);
      })
      .catch((error) => console.log(error));
  }, [user]);

  // Keep the fakeOrders array as default value for the demo purpose
  const fakeOrders = [
    {
      _id: "imamafakeorderid",
      offer: "iamafakeofferid",
      session: { amount_total: 2000 },
      orderedBy: "iamafakeuserid",
      createdAt: "2022-10-31",
    },
    {
      _id: "imamafakeorderid2",
      offer: "iamafakeofferid2",
      session: { amount_total: 2500 },
      orderedBy: "iamafakeuserid2",
      createdAt: "2022-11-15",
    },
    {
      _id: "imamafakeorderid3",
      offer: "iamafakeofferid3",
      session: { amount_total: 3000 },
      orderedBy: "iamafakeuserid3",
      createdAt: "2022-11-25",
    },
  ];

  return (
    <div>
      <h1>My Orders</h1>
      <div className="container">
        <div className="row mt-4">
          {/* {fakeOrders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))} */}

          {allOrders.length === 0
            ? fakeOrders.map((order) => (
                <OrderCard key={order._id} order={order} />
              ))
            : allOrders.map((order) => (
                <OrderCard key={order._id} order={order} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
