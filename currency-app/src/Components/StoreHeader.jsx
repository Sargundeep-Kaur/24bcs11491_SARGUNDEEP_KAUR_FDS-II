import { useContext } from "react";
import { Currencycontext } from "../Context/Currencycontext";

function StoreHeader() {

  const { currency, changeCurrency } = useContext(Currencycontext);

  return (
    <header>

      <h1>My E-Commerce Store</h1>

      <div>
        <button onClick={() => changeCurrency("USD")}>
          USD
        </button>

        <button onClick={() => changeCurrency("EUR")}>
          EUR
        </button>

        <button onClick={() => changeCurrency("GBP")}>
          GBP
        </button>

        <button onClick={() => changeCurrency("JPY")}>
          JPY
        </button>
      </div>

      <p>Selected Currency: {currency}</p>

    </header>
  );
}

export default StoreHeader;