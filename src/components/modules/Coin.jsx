import React from "react";
import styles from "./Coin.module.css";

export default function Coin({ coin }) {
  console.log(coin);
  return (
    <div className={styles.coinInfo}>
      <div>
        <img src={coin.image} alt={coin.name} width="15px" />
        &nbsp; <span>{coin.symbol}</span>
      </div>
      <p>{coin.name}</p>
      <p>{coin.current_price}</p>
      <p
        style={{
          color:
            coin.price_change_percentage_24h <= 0
              ? "rgba(234, 51, 51, 0.767)"
              : "rgba(36, 172, 86, 0.726)",
        }}
      >
        {coin.price_change_percentage_24h >= 0
          ? `+${coin.price_change_percentage_24h.toFixed(2)}`
          : coin.price_change_percentage_24h.toFixed(2)}
        &nbsp;%
      </p>
      <p>{coin.total_volume}</p>
    </div>
  );
}
