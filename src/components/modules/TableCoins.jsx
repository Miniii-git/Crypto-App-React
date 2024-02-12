import React from "react";
import Coin from "./Coin";
import styles from "./tableCoin.module.css";

function TableCoins({ coinsData, currency }) {
  return (
    <>
      <div className={styles.titleOfTable}>
        <span>Coin</span>
        <span>Name</span>
        <span>Price</span>
        <span>24h</span>
        <span>Total Volume</span>
      </div>
      <div>
        {coinsData.map((coin) => (
          <Coin key={coin.id} coin={coin} currency={currency} />
        ))}
      </div>
    </>
  );
}

export default TableCoins;
