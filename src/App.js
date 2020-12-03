import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = "https://api.exchangeratesapi.io/latest"

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [amount, setAmount] = useState(1)

useEffect(() => {
  fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      const firstCurrency = Object.keys(data.rates)[0]
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setToCurrency(firstCurrency)
    })
}, [])
return (
  <>
    <h1>Convert</h1>
    <CurrencyRow
      currencyOptions={currencyOptions}
      selectCurrency={fromCurrency}
     onChangeCurrency={e => setFromCurrency(e.target.value)}
    />
    <div className="equals">=</div>
    <CurrencyRow
     currencyOptions={currencyOptions}
     selectedCurrency={toCurrency}
     onChangeCurrency={e => setToCurrency(e.target.value)}
    />
  </>
  );
}

export default App;
