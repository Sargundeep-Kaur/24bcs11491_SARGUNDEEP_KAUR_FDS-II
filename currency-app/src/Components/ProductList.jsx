import { useContext } from "react";
import { Currencycontext } from "../Context/Currencycontext";

function ProductList() {

  const { formatPrice } = useContext(Currencycontext);

  return (
    <div>
      <h2>Products</h2>

      <h3>Wireless Headphones</h3>

      <p>
        Price: {formatPrice(100)}
      </p>
    </div>
  );
}

export default ProductList;