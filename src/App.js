import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import Payment from "./Payment.js";
import Orders from "./Orders.js";
import { useStateValue } from "./Stateprovider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Productpage from "./Productpage";
import Register from "./Register";

const promise = loadStripe(
  "pk_test_51LZwIFSEQchHCmwgh8o7rdqQtGpvvcamn9vwEeKsbtzskbmu8iYYyTIpA7BOEwvBOGLxqemX5oPDLf8CS4su19Go00TOhlf5oX"
);

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({
        type: "SET_USER",
        user: user,
      });
    } else {
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/orders"
            element={
              <div>
                <Header />
                <Orders />
              </div>
            }
          />

          <Route
            path="/product"
            element={
              <>
                <Header /> <Productpage />
              </>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/checkout"
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            }
          />

          <Route
            path="/payment"
            element={
              <div>
                <Header />

                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </div>
            }
          />

          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
