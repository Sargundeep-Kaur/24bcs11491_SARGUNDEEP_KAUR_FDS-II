import { useState } from "react";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [result, setResult] = useState("");

  const rates = {
    USD: 1,
    INR: 87,
    EUR: 0.85,
    GBP: 0.75,
  };

  const convertCurrency = () => {
    const usd = amount / rates[from];
    const converted = usd * rates[to];
    setResult(converted.toFixed(2));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Currency Converter</h1>

      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <label>From : </label>

      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>

      <br /><br />

      <label>To : </label>

      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>

      <br /><br />

      <button onClick={convertCurrency}>Convert</button>

      <h2>Converted Amount : {result}</h2>
    </div>
  );
}

export default CurrencyConverter;


