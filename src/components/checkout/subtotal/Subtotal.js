import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../../services/StateProvider";

import "./Subtotal.css";

function Subtotal() {
  const [value, setValue] = React.useState(0);
  const [{ basket }, dispatch] = useStateValue();

  React.useEffect(() => {
    let temporalValue = 0;
    basket.forEach((item) => {
      temporalValue += item.price;
    });
    setValue(temporalValue);
  }, [basket]);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} item{basket.length > 1 && "s"}){" "}
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order Contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={value}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
