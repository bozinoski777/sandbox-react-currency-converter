import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = "https://api.exchangeratesapi.io/latest"

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])

useEffect(() => {
  fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
    })
}, [])
return (
  <>
    <h1>Convert</h1>
    <CurrencyRow
      currencyOptions={currencyOptions}
    />
    <div className="equals">=</div>
    <CurrencyRow
     currencyOptions={currencyOptions}
    />
  </>
  );
}

export default App;
