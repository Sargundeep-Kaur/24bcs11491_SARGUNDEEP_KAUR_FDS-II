import { useContext } from "react";
import { Currencycontext } from "../Context/Currencycontext";

function CheckoutCart() {

  const { formatPrice } = useContext(Currencycontext);

  return (
    <div>
      <h2>Checkout Cart</h2>

      <p>
        Subtotal: {formatPrice(150)}
      </p>
    </div>
  );
}

export default CheckoutCart;