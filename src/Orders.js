import React, { useEffect, useState } from "react";
import "./Orders.css";
import { useStateValue } from "./Stateprovider";
import Order from "./Order.js";
import axios from "./axios";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const getOrders = async () => {
        try {
          const response = await axios.get(`/users/${user._id}`);
          setOrders(response.data.orders);
        } catch (error) {
          console.error(error);
        }
      };
      getOrders();
    } else {
      setOrders([]);
    }
  }, [user]);
  console.log(orders);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order, i) => {
          return <Order key={i} order={order} />;
        })}
      </div>
    </div>
  );
}

export default Orders;
