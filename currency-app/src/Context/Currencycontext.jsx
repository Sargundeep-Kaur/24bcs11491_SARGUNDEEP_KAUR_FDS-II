import { createContext, useState } from "react";

export const Currencycontext = createContext();

const EXCHANGE_RATES = {
  USD: { rate: 1.0, symbol: "$" },
  EUR: { rate: 0.85, symbol: "€" },
  GBP: { rate: 0.75, symbol: "£" },
  JPY: { rate: 110.0, symbol: "¥" }
};

export function CurrencyProvider({ children }) {

  const [currency, setCurrency] = useState("USD");

  const changeCurrency = (currencyCode) => {
    setCurrency(currencyCode);
  };

  const formatPrice = (usdAmount) => {

    const currencyData = EXCHANGE_RATES[currency];

    // Currency exists
    if (currencyData) {

      const convertedAmount = usdAmount * currencyData.rate;

      return `${currencyData.symbol}${convertedAmount.toFixed(2)}`;
    }

    // Currency does not exist
    return `${usdAmount.toFixed(2)} ${currency}`;
  };

  return (
    <Currencycontext.Provider
      value={{
        currency,
        changeCurrency,
        formatPrice
      }}
    >
      {children}
    </Currencycontext.Provider>
  );
}