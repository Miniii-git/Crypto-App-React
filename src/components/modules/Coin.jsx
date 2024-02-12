import React from "react";
import styles from "./Coin.module.css";

export default function Coin({ coin }) {
  return (
    <div className={styles.coinInfo}>
      <div>
        <img src={coin.image} alt={coin.name} width="15px" />
        &nbsp; <span>{coin.symbol}</span>
      </div>
      <p>{coin.name}</p>
      <p>{coin.current_price}</p>
      <p>{coin.price_change_percentage_24h}</p>
      <p>{coin.total_volume}</p>
    </div>
  );
}
