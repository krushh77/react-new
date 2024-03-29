import axios from "axios";
import React, { useEffect, useState } from "react";
// import "./style.css";

const CurrencyConverter = () => {
  const [disable, setDisable] = useState(true);
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrencies, setSelectedCurrencies] = useState({
    first: "",
    second: "",
  });
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [inputAmount, setInputAmount] = useState(1); // Set default amount to 1

  const options = {
    method: "GET",
    url: "https://currency-exchange.p.rapidapi.com/listquotes",
    headers: {
      "X-RapidAPI-Key": "d4584fc53amshc3b26f4e59b237fp195eeajsnd3a4644cf75f",
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
  };

  async function getCurrencies() {
    try {
      const response = await axios.request(options);
      setCurrencies(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event) {
    setSelectedCurrencies({
      ...selectedCurrencies,
      [event.target.name]: event.target.value,
    });
  }

  async function Convert() {
    const options = {
      method: "GET",
      url: "https://currency-exchange.p.rapidapi.com/exchange",
      params: {
        from: selectedCurrencies.first,
        to: selectedCurrencies.second,
        q: inputAmount, // Use inputAmount here
      },
      headers: {
        "X-RapidAPI-Key": "d4584fc53amshc3b26f4e59b237fp195eeajsnd3a4644cf75f",
        "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      setConvertedAmount(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (selectedCurrencies.first && selectedCurrencies.second && inputAmount) {
      setDisable(false);
    }
  }, [selectedCurrencies, inputAmount]);

  useEffect(() => {
    getCurrencies();
  }, []);

  return (
    <div className="card">
      <h1>Currency Converter</h1>
      <div className="main">
        <div className="input-container">
          <label className="input_label">Amount</label>
          <br />
          <input
            type="number"
            className="input_field"
            value={inputAmount}
            onChange={(e) => setInputAmount(e.target.value)}
          />
        </div>
        <div className="selectfirst">
          <label className="input_label">Select First Currency</label>
          <br />
          <select className="input_field" onChange={handleChange} name="first">
            <option>select currency</option>
            {currencies.map((c) => (
              <option value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="selectfirst">
          <label className="input_label">Select Second Currency</label>
          <br />
          <select className="input_field" onChange={handleChange} name="second">
            <option>select Currency</option>
            {currencies.map((c) => (
              <option value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="result-div">
      <button disabled={disable} onClick={Convert} className="convertbtn">
        Convert
      </button>
      {convertedAmount && (
        <div className="result-container">
          1 {selectedCurrencies.first} = {convertedAmount * inputAmount}{" "}
          {selectedCurrencies.second}
        </div>
      )}
      </div>
    </div>
  );
};

export default CurrencyConverter;