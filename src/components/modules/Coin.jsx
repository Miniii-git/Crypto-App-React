import React, { useEffect, useState } from "react";
import styles from "./Coin.module.css";
import upGraph from "../../assets/chart-up.svg";
import downGraph from "../../assets/chart-down.svg";

export default function Coin({ coin, currency }) {
  const [sign, setSign] = useState("$");
  useEffect(() => {
    if (currency === "usd") {
      setSign("$");
    }
    if (currency === "eur") {
      setSign("€");
    }
    if (currency === "jpy") {
      setSign("¥");
    }
  }, [currency]);

  const showGraph = () => {
    console.log("graph");
  };
  console.log(coin);
  return (
    <div className={styles.coinInfo}>
      <div>
        <img src={coin.image} alt={coin.name} width="15px" />
        &nbsp;{" "}
        <a id={styles.coinSymbol} onClick={showGraph}>
          {coin.symbol}
        </a>
      </div>
      <p>{coin.name}</p>
      <p>
        <span>{sign}&nbsp;</span>
        {coin.current_price}
      </p>
      <p
        style={{
          color: coin.price_change_percentage_24h <= 0 ? "#d33535" : "#58bd7d",
        }}
      >
        {coin.price_change_percentage_24h >= 0
          ? `+${coin.price_change_percentage_24h.toFixed(2)}`
          : coin.price_change_percentage_24h.toFixed(2)}
        &nbsp;%
      </p>
      <p>{coin.total_volume}</p>
      <img src={coin.price_change_percentage_24h <= 0 ? downGraph : upGraph} />
    </div>
  );
}
