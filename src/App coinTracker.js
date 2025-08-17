
//import Button from "./Button";
//import styles from "./App.module.css";

import { useEffect, useState } from "react";

//import { useState, useEffect} from "react";

function App() {

  const [loading, setLoading] = useState(true);
  const [conis, setCoins] = useState([]);
  const [chagebtc , setChangebtc] = useState(0);
  const [selcoin , setSelcoin] = useState(0);
  const onChange = (event) => {

    setSelcoin(event.target.value);
    console.log("코인 금액 ===", event.target.value );

      //setChangebtc(coni.quotes.USD.price / event.target.value);
  }
  const onChangeMoney = (event) => {
    console.log("입력한 금액 ===", event.target.value );
      setChangebtc (event.target.value);
  }
  useEffect( () =>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then( (response) => response.json())
    .then( (json) => {
      console.log(json);
      setCoins(json);
      setLoading(false);
    });
  }, []);

  return <div>
    <h1>The Coins! {loading? "" : `(${conis.length})`} </h1>
    <input type="number"  placeholder="코인 갯수" onChange={onChangeMoney} ></input>
    {loading ? <strong>Loading...</strong> : 
    <><select onChange={onChange}>
        {conis.map((coin) => (
          <option key={coin.id} value={coin.quotes.USD.price}>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select><h3>코인 총 금액 : {selcoin * chagebtc}</h3></>
    }
    
  </div>;

}

export default App;
