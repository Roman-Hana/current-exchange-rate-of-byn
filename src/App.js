import React, { useEffect, useState } from "react";
import "./App.css";

const CurenncyAPI = "https://www.nbrb.by/api/exrates/rates?periodicity=0";

function App() {
  const [CurrencyOptions, setCurrencyOptions] = useState([]);

  useEffect(() => {
    fetch(CurenncyAPI)
      .then((res) => res.json())
      .then((data) => setCurrencyOptions(data));
  }, []);

  return (
    <div className="app">
      <h1>
        Web page with the current exchange rate of the Belarusian ruble in
        relation to all the foreign currencies established by the National Bank
        of the Republic of Belarus.
      </h1>
      <table className="currencyTable">
        <thead>
          <tr>
            <th>Currency Name</th>
            <th>Number of units of foreign currency</th>
            <th>Letter code of the currency</th>
            <th>Official rate</th>
          </tr>
        </thead>
        <tbody>
          {CurrencyOptions.map((el) => (
            <tr key={el.Cur_ID}>
              <td>{el.Cur_Name}</td>
              <td>{el.Cur_Scale}</td>
              <td>{el.Cur_Abbreviation}</td>
              <td>{el.Cur_OfficialRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
