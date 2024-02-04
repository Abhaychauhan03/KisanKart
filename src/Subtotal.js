import React, { useMemo } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./Stateprovider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const amount = useMemo(() => getBasketTotal(basket), []);

  const navigate = useNavigate();

  const handleCheckout = (e) => {
    if (amount < 1) return;
    navigate("/payment");
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={amount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button disabled={amount < 1} onClick={handleCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
