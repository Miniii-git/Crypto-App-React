import React from "react";
import Coin from "./Coin";
import styles from "./tableCoin.module.css";
import { RotatingLines } from "react-loader-spinner";

function TableCoins({ coinsData, currency, isloading }) {
  return (
    <>
      <div className={styles.titleOfTable}>
        <span>Coin</span>
        <span>Name</span>
        <span>Price</span>
        <span>24h</span>
        <span>Total Volume</span>
      </div>
      {isloading ? (
        <div className={styles.spinner}>
          <RotatingLines strokeWidth="4" strokeColor="#8884D8" />
        </div>
      ) : (
        <div>
          {coinsData.map((coin) => (
            <Coin key={coin.id} coin={coin} currency={currency} />
          ))}
        </div>
      )}
    </>
  );
}

export default TableCoins;
